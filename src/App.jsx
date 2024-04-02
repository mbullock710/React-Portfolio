import './App.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
 return (

  <div>
    <Header />
      <Navigation />
      <Outlet />
      <Footer />  
      </div>
  );
}

export default App;