import React from "react";

import { Navbar } from "react-bootstrap";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Router } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar/searchMovie";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      {/* <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header /> */}

            

            
            <div className="container">

              <SearchBar />

            </div>
             
            
            {/* <Footer />
          </div>
        </Router>
      </ApolloProvider> */}
    </>
  );
}
export default App;
