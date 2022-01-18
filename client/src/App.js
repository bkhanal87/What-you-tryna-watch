import React from "react";

import { Navbar } from "react-bootstrap";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
// import { Router } from "react-router";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Home from './Components/Home';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar/searchMovie";
import Login from './pages/Login';
import Signup from './pages/Signup';
import './Components/styles/searchBar.css';
import './Components/styles/movie.css';
import './Components/styles/style.css';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
        
          <div className="container">
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchBar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            <Footer />
          </div>
            
        </BrowserRouter>   
      </ApolloProvider>
    </>
  );
}
export default App;
