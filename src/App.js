import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/footer/footer';

import resumeData from './resumeData';



function App() {
  return (
    <div className="App">
    <Header resumeData={resumeData}/>
    <About resumeData={resumeData} />
    {/* <Resume resumeData={resumeData} /> */}
    <Portfolio />
    <ContactUs resumeData={resumeData} />
    <Footer />
    </div>
  );
}

export default App;
