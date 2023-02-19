import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { apiServer } from 'config'

const link = createHttpLink({
  uri: apiServer.graphqlUrl || 'http://localhost:8080/graphql',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
export default client
