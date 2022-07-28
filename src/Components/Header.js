import React, { useState } from 'react';
import '../Components/style.css';
import data from './test.json';

const Header = () => {
const [detail, setDetail] = useState("");
 
const input = ()=>{
    let inp = document.querySelector("#searchBOX").value.toLowerCase();
    if(inp === ""){
      document.querySelector("#result").innerHTML="";
    }else{
      data.map(val => {
        if(val.name.toLowerCase().startsWith(inp) || val.neighborhood.toLowerCase().startsWith(inp)|| val.cuisine_type.toLowerCase().startsWith(inp)){
          setDetail({...val});
          const li = document.createElement("li");
           li.innerHTML = `<li class="list"> ${val.name} </li>`;
           document.querySelector("#result").appendChild(li);
        }
     })
    }
  }

  const search = () => {
    document.querySelector('.search-form').classList.toggle("active");
    document.querySelector('.navbarActive').classList.remove("active");
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
  }
  const sign = (e) => {
    e.preventDefault();
    document.querySelector(".signContainer").classList.toggle("active");
    document.querySelector(".search-form").classList.remove("active");
    document.querySelector(".navbarActive").classList.remove("active");
    document.querySelector(".loginContainer").classList.remove("active");
  }
  return (
    <>
      <header className="header">
        <a href="=" className="logo">
          <img src={require("../Images/433087.png")} alt="logo" /> <span>Grab</span>
        </a>

        <nav className="navbar">
          <div id="searc"><input id="searchBOX" onChange={input} /><i className="fas fa-search" id="search-btn" /></div>
          <a href="#main">home</a>
          <a href="#offer">Offers</a>
          <a href="#review">review</a>
          <a href="=" onClick={login}>LogIN</a>
          <a href="=" onClick={sign}>SignUP</a>

        </nav>
        <nav className="navbarActive">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="=" onClick={login}>LogIN</a>
          <a href="=" onClick={sign}>SignUP</a>
        </nav>

        <div className="icons">
          <div></div>
          <div className="fas fa-search" id="search-btn" onClick={search}></div>
          <div className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-bars" id="menu-btn" onClick={menu}></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label className="fas fa-search"></label>
        </div>
      </header>
    </>
  )
}

export default Header;