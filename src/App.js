import './App.css';
import Header from './components/Header/Header'
import NextHeader from './components/Header/NextHeader'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Category from './components/Category/Category';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <NextHeader />
      </div>
    </ApolloProvider>
  );
}

const client = new ApolloClient({
  link: createHttpLink({uri: "http://localhost:8050/graphql"}),
  cache: new InMemoryCache(),
});

export default App;
