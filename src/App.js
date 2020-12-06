import React, { useState, useEffect  } from "react"
import './App.css';
import Header from './components/header/header'
import About from './components/about/about'
import Contact from './components/contactus/contact'
import Resume from './components/resume/resume'
// import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'
import data from './webData/data'

function App() {
  return (
    <div className="App">
        <Header data={data}/>
        <About data={data}/>
        <Resume />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
