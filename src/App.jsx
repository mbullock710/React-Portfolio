import './App.css'
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
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
   
   
   




    {/* <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}; */}


