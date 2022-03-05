import React from 'react'
import logo from "../../assets/logo.svg"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <div className="container">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
          <p>Request Early Access</p></div>
      </div>
      <div className="gpt3__footer-links container section__padding">
        <div className="gpt3__footer-links_container">
          <img src={logo} alt="LOgo" />
          <p>Crechterwoord K12 182 DK Alknjkcb,
            All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h3>Company</h3>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h3>Get in touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>117 - 322 - 272</p>
          <p>info@gpt3.io</p>
        </div>
      </div>
      <div className="gpt3__footer-inner">
        <p>Created By Aasim Omar in 5/3/2022</p>
      </div>
    </footer>
  )
}

export default Footer