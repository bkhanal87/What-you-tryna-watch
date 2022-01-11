import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './pages/Home';
// import Chats  from './pages/Chats';
import Header from './components/Header';
import Footer from './components/Footer';

// import Home from './pages/Home';
// import  from './pages/';
// import Header from './components/Header';
// import Footer from './components/Footer';
import SearchBar from './Components/SearchBar'


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

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
            <Route exact path="/chats">
              <Chats />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

    // <ApolloProvider client={client}>
    //   <Router>
    //     <div className="flex-column justify-flex-start min-100-vh">
    //       <Header />
    //       <div className="container">
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
    //         <Route exact path="/thoughts/:thoughtId">
    //           <SingleThought />
    //         </Route>
    //       </div>
    //       <Footer />
    //     </div>
    //   </Router>
    // </ApolloProvider>
    <>
      <SearchBar />
    </>

  );
}

export default App;


// export default App;

