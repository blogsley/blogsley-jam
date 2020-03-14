import Vue from 'vue'
import VueApollo from 'vue-apollo'

import { ApolloClient, DefaultOptions } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'

Vue.use(VueApollo)

declare global {
  interface Window {
    __APOLLO_STORE__: any;
    snapSaveState(): any;
  } /*
  interface Document {    
  } */
}

/* (window as any).snapSaveState = () => {
  (document as any).querySelector("div#app").setAttribute("data-server-rendered", "true");
}; */

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  mutate: {
    // fetchPolicy: 'cache-and-network',
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const cache = new InMemoryCache()

export function loadState() {
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__APOLLO_STORE__

// Allow the passed state to be garbage-collected
// delete window.__APOLLO_STORE__

  cache.restore(preloadedState)
  console.log('preloadedState')
  console.log(preloadedState)
}

const createClient = function () {
  const serverUrl = process.env.VUE_APP_SERVER_URL;
  console.log(serverUrl);
  const httpLink = createHttpLink({
    uri: serverUrl + '/graphql/'
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('user-token')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : ''
        authorization: token
      }
    }
  })

  const client = new ApolloClient({
    // defaultOptions,
    // link: authLink.concat(httpLink),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        }
        if (networkError) console.log(`[Network error]: ${networkError}`)
      }),
      // authLink.concat(httpLink)
      httpLink
    ]),

    cache,
  })

  return client
}

export function createProvider (options = {}) {
  const client = createClient()

    // Tell react-snap how to save state
  /*
  window.snapSaveState = () => ({
    "__APOLLO_STORE__": client.cache.extract()
  });
*/
  window.snapSaveState = () => {
    (document as any).querySelector("div#app").setAttribute("data-server-rendered", "true");
    return { "__APOLLO_STORE__": client.cache.extract() }
  };

  const apolloProvider = new VueApollo({
    defaultClient: client
  })

  return apolloProvider
}
