---
sidebar_position: 1
---

# Basic Usage

## Overview ✨

To connect to a GraphQL Server, we first need to create a `GraphQLClient`. A `GraphQLClient` requires both a `cache` and a `link` to be initialized.

In our example below, we will be using the Github Public API. we are going to use `HttpLink` which we will concatenate with `AuthLink` so as to attach our github access token. For the cache, we are going to use `GraphQLCache`.

```dart
// ...

final _httpLink = HttpLink(
  'https://api.github.com/graphql',
);

final _authLink = AuthLink(
  getToken: () async => 'Bearer $YOUR_PERSONAL_ACCESS_TOKEN',
);

Link _link = _authLink.concat(_httpLink);

/// subscriptions must be split otherwise `HttpLink` will. swallow them
if (websocketEndpoint != null){
  final _wsLink = WebSocketLink(websockeEndpoint);
  _link = Link.split((request) => request.isSubscription, _wsLink, _link);
}

final GraphQLClient client = GraphQLClient(
  /// **NOTE** The default store is the InMemoryStore, which does NOT persist to disk
  cache: GraphQLCache(),
  link: _link,
);

// ...
```

## Persistence

In `v4`, `GraphQLCache` is decoupled from persistence, which is managed (or not) by its `store` argument. We provide a `HiveStore` for easily using [hive](https://docs.hivedb.dev/#/) boxes as storage, which requires a few changes to the above:

:::info
NB: This is different in `graphql_flutter`, which provides `await initHiveForFlutter()` for initialization in `main`
:::

```dart
GraphQL getClient() async {
  ...
  /// initialize Hive and wrap the default box in a HiveStore
  final store = await HiveStore.open(path: 'my/cache/path');
  return GraphQLClient(
      /// pass the store to the cache for persistence
      cache: GraphQLCache(store: store),
      link: _link,
  );
}

```
