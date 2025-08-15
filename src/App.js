import React from 'react';
import "./App.css";
import Header from'./components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';

const App = () => {
    return (
        <>
        <Header />
        <main className="main" data-wf-page="626f1d8704af2a0701eacfc1" data-wf-site="5c58d24c0c3ff625822bee4b" > 
            <Home />
            <About />
            <Skills />
            <Services />  
            <Portfolio />
            <Qualification />
        </main>
        </>)
}

export default App