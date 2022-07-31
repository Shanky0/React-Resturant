import React, { useState } from 'react';
import '../Components/style.css';
import data from './test.json';

const Header = () => {

  const input = () => {
    document.querySelector("#result").style.display = "block";
    document.querySelector("#detailContainer").style.display = "none";
    let input = document.querySelector("#search-box").value.toLowerCase();
    let inp = document.querySelector("#searchBOX").value.toLowerCase();
    document.querySelector("#result").innerHTML = ""
    if (inp === "" && input === "") {
      document.querySelector("#result").innerHTML = "";
      document.querySelector("#sea").style.display = "none";
    } else {
      document.querySelector("#sea").style.display = "block"
      data.map(val => {
        if (val.name.toLowerCase().startsWith(inp || input) || val.neighborhood.toLowerCase().startsWith(inp || input) || val.cuisine_type.toLowerCase().startsWith(inp || input)) {
          const li = document.createElement("li");
          li.innerHTML = `<li className="list"> ${val.name} - (${val.address})</li>`;
          document.querySelector("#result").appendChild(li);
        }
      })
    }
  }
 
  const searching = () => {

    document.querySelector('.search-form').classList.toggle("active");
    document.querySelector('.search-box').value = "";
    document.querySelector("#sea").style.display = "none";
    document.querySelector('.navbarActive').classList.remove("active");
    document.querySelector("#detailContainer").style.display = "none";
  }
  const menu = () => {
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector(".navbarActive").classList.toggle("active");
  }
  const login = (e) => {
    e.preventDefault();
    document.querySelector(".loginContainer").classList.toggle("active");
    document.querySelector(".search-form").classList.remove("active");
    document.querySelector(".navbarActive").classList.remove("active");
    document.querySelector(".signContainer").classList.remove("active");
    document.querySelector("#detailContainer").style = "display:none";
  }
  const sign = (e) => {
    e.preventDefault();
    document.querySelector(".signContainer").classList.toggle("active");
    document.querySelector(".search-form").classList.remove("active");
    document.querySelector(".navbarActive").classList.remove("active");
    document.querySelector(".loginContainer").classList.remove("active");
    document.querySelector("#detailContainer").style = "display:none";
  }
  return (
    <>
      <header className="header">
        <a href="=" className="logo">
          <img src={require("../Images/433087.png")} alt="logo" /> <span>Grab</span>
        </a>
        {/* For Navbar on Desktop */}
        <nav className="navbar">
          <div id="searc"><input id="searchBOX" onChange={input} /><i className="fas fa-search" id="search-btn" /></div>
          <a href="#main">home</a>
          <a href="#offer">Offers</a>
          <a href="#review">review</a>
          <a href=".loginC" id="loginDText" onClick={login}>LogIN</a>
          <a href=".signC" id="signDText" onClick={sign}>SignUP</a>
          <a href="=" id="logDout"> </a>
        </nav>
        {/* For NavBar on mobile screen */}
        <nav className="navbarActive">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="=" id="loginText" onClick={login}>LogIN</a>
          <a href="=" id="signText" onClick={sign}>SignUP</a>
          <a href="=" id="logout"> </a>
        </nav>
        <div className="icons">
          <div></div>
          <div className="fas fa-search" id="search-btn" onClick={searching}></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-bars" id="menu-btn" onClick={menu}></div>
        </div>
        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." onChange={input} />
          <label className="fas fa-search"></label>
        </div>
      </header>
    </>
  )
}

export default Header;