import React from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {

  let [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className="gpt3__navbar container section__padding">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="gpt3__navbar-links_sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine className='toggle-menu fade-in' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='toggle-menu fade-in' onClick={() => setToggleMenu(true)} />}
        {toggleMenu &&
          <div className="gpt3__navbar-menu_container scale-up-center">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
            <div className="gpt3__navar-menu_sign">
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Navbar