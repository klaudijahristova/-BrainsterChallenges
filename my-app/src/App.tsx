import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Main from './Components/main/main';



function App() {
  return (
    <div className="App wrapper mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
