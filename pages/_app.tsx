import '../globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://localhost:3000/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}
export default MyApp
