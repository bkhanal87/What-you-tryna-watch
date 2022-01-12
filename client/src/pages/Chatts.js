import React from 'react';
import { useQuery } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from "./components/SearchBar/searchMovie.js";


const Chatts = () => {
   return (
    <>
        <Header />
          <main>
            <Movie />
            <Comments />
          </main>
        <Footer />
        </>
  );
};

export default Chatts;