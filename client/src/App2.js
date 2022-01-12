import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chatts from './pages/Chatts';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">

              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/chatts/:Id">
                <Chatts />
              </Route>

            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
