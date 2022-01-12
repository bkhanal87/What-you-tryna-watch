import React from 'react';
// import { Navbar } from 'react-bootstrap';

import Header from './Components/Header';
// import Footer from './components/Footer';
import SearchBar from './Components/SearchBar/searchMovie'
import "./Components/styles/style.css";
import "./Components/styles/movie.css"
import "./Components/styles/searchBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>
      {/* <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header /> */}

            <Header />
            <div className="container">
            <h1 className="title">Movie Finder App</h1>
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
