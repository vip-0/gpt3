import React from 'react';
import { Blog, Features, Header, Footer, Whatgpt3 } from './containers/index.js';
import { Article, CTA, Feature, Navbar } from './components/index.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header /> 
      </div>
      newwww
      <Features />
      <Blog />
      <Whatgpt3 />
      <CTA />
      <Feature />
      <Article />
      <Footer />
    </div>
  )
}

export default App
