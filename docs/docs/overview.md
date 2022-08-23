---
sidebar_position: 1
title: Overview
---

# Overview 🎯

[graphql/client.dart](https://pub.dev/packages/graphql) is a GraphQL client for dart modeled on the [apollo client](https://www.apollographql.com/docs/react/), and is currently the most popular GraphQL client for dart. It is co-developed alongside [graphql_flutter](https://pub.dev/packages/graphql_flutter) [on github](https://github.com/zino-hofmann/graphql-flutter), where you can find more in-depth examples. We also have a lively community alongside the rest of the GraphQL Dart community on [discord](https://discord.com/invite/tXTtBfC).

As of v4, it is built on foundational libraries from the [gql-dart project](https://github.com/gql-dart), including [gql](https://github.com/gql-dart/gql/tree/master/gql), [gql_link](https://github.com/gql-dart/gql/tree/master/links/gql_link), and normalize. We also depend on [hive](https://docs.hivedb.dev/#/) for persistence via `HiveStore`.

## Quick Start 🚀

### Installing 🧑‍💻

```shell
# 📦 Install flutter graphql with Dart:from pub.dev
dart pub add graphql
```

```shell
# 📦 Install flutter graphql with Flutter:from pub.dev
flutter pub add graphql
```

```shell
# This will add a line like this to your package's pubspec.yaml (and run an implicit dart pub get):
dependencies:
  graphql: ^5.1.1
```

Alternatively, your editor might support dart pub get or flutter pub get. Check the docs for your editor to learn more.

- Import it
- Now in your Dart code, you can use:

```shell
import 'package:graphql/client.dart';
```

## Feature Set ✨

✅ Queries

✅ Mutations

✅ Subscriptions ⚡️

✅ Query polling and rebroadcasting ⚙️

✅ In memory and persistent caching 🗂

✅ GraphQL Upload 📁

✅ Optimistic results

✅ Modularity

✅ Client-state management 👷‍♂️

🚧 Automatic Persisted Queries (out of service)
