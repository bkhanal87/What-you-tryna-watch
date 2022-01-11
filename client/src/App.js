import React from 'react';
import { Navbar } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './Components/SearchBar'

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
             
              <SearchBar />
             
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </>

  );
}

export default App;
