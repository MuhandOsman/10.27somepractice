import React from 'react';
import Nav from "./components/navbar/Nav"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

import MyProvider from "./context/MyProvider"

import './App.css';

const App = () => {
  return (
    <MyProvider>
    <main>
     <Nav />
     <Main />
     <Footer />
    </main>
    </MyProvider>
  );
}

export default App;

