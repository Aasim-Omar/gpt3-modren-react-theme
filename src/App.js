import React from "react";
import { Article, Brand, CTA, Feature, Navbar } from "./components"
import { Blog, Features, Header, Footer, WhatGPT3, Possibility } from "./containers"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
