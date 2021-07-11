### GraphQL and Apollo:

  * What GraphQL tries to solve is two issues: 
    1. Over fetching data (Say the FE App only needs username and id of a users, with rest we are fetching the whole user document)
    2. Reduce the number of requests to fetch reltaed entities (get users, then get each user posts, ...). this of course include having multiple endpoints on the REST backend.

  * A GraphQL server exposes only one endpoint (usually called /graphql). Then our FrontEnd App sends requests to this endpoint (Query to get data, and Mutation to Modify data).
  * Basic types: https://graphql.org/graphql-js/basic-types/

  Apollo Client: 

  * It caches the results fetched from graphql server, so that, when we try to fetch the same data, we get from the cache and not from databse.
  * Apollo is also used as state management in a react app, removing the need for redux, sagas, thunks