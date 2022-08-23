---
sidebar_position: 2
---

# Direct Cache Access API

## Overview ✨

The GraphQLCache leverages normalize to give us a fairly apollo-ish direct cache access API, which is also available on GraphQLClient. This means we can do local state management in a similar fashion as well.

The cache access methods are available on any cache proxy, which includes the GraphQLCache the OptimisticProxy passed to update in the graphql_flutter Mutation widget, and the client itself.

:::info
NB counter-intuitively, you likely never want to use use direct cache access methods directly on the `cache`, as they will not be rebroadcast automatically.
Prefer `client.writeQuery` and `client.writeFragment` to those on the `client.cache` for automatic rebroadcasting
:::

In addition to this overview, a complete and well-commented rundown of can be found in the GraphQLDataProxy API docs.

### `Request`, `readQuery`, and `writeQuery`

The query-based direct cache access methods `readQuery` and `writeQuery` leverage gql_exec Requests used internally in the link system. These can be retrieved from `options.asRequest` available on all `*Options` objects, or constructed manually:

```dart
const int nRepositories = 50;

final QueryOptions options = QueryOptions(
  document: gql(readRepositories),
  variables: {
    'nRepositories': nRepositories,
  },
);

var queryRequest = Request(
  operation: Operation(
    document: gql(readRepositories),
  ),
  variables: {
    'nRepositories': nRepositories,
  },
);

/// experimental convenience api
queryRequest = Operation(document: gql(readRepositories)).asRequest(
  variables: {
    'nRepositories': nRepositories,
  },
);

print(queryRequest == options.asRequest);

final data = client.readQuery(queryRequest);
client.writeQuery(queryRequest, data);

```

The cache access methods are available on any cache proxy, which includes the GraphQLCache the OptimisticProxy passed to update in the graphql_flutter Mutation widget, and the client itself.

:::info
NB counter-intuitively, you likely never want to use use direct cache access methods on the cache cache.readQuery(queryRequest); client.readQuery(queryRequest); //
:::

### `FragmentRequest`, `readFragment`, and `writeFragment`

`FragmentRequest` has almost the same api as `Request`, but is provided directly from `graphql` for consistency. It is used to access `readFragment` and `writeFragment`. The main differences are that they cannot be retreived from options, and that `FragmentRequests` require `idFields` to find their cooresponding entities:

```dart
final fragmentDoc = gql(
  r'''
    fragment mySmallSubset on MyType {
      myField,
      someNewField
    }
  ''',
);

var fragmentRequest = FragmentRequest(
  fragment: Fragment(
    document: fragmentDoc,
  ),
  idFields: {'__typename': 'MyType', 'id': 1},
);

/// same as experimental convenience api
fragmentRequest = Fragment(document: fragmentDoc).asRequest(
  idFields: {'__typename': 'MyType', 'id': 1},
);

final data = client.readFragment(fragmentRequest);
client.writeFragment(fragmentRequest, data);
```

:::info
NB You likely want to call the cache access API from your client for automatic broadcasting support.
:::
