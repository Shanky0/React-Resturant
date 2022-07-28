import React from 'react'

const Main = () => {
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
      <section id="main" className='main'>
        <div className='content'>
          <h3>Feeling <span> Hungry</span></h3>
          <h1><span> Grab </span>food from Us</h1>
          <a href=".about" className='btn'> Know About<span> US</span> </a>
        </div>

        {/* Search Result */}
        <div id="sea">
          <ul id="result">

          </ul>

        </div>

        {/* Login Section */}
        <div className="loginContainer" >
          <form className="login">
            <p className="login-text" style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "5%" }}>LOGIN</p>

            <input type="email" placeholder="Email" name="email" required />

            <input type="password" placeholder="Password" name="password" required />

            <button name="submit" className="btn">Login</button>

            <p className="login-register-text">Don't have an account? <a href="=" onClick={sign}>Register Here</a></p>
          </form>
        </div>

        {/* SignUP section */}
        <div className="signContainer" >
          <form className="sign">
            <p style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "5%" }}>Sign UP</p>

            <input type="email" placeholder="Email" name="email" required />

            <input type="password" placeholder="Password" name="password" id="pass" required />
            <input type="password" placeholder=" Re-Enter Password" name="password" id="confirm" required />

            <button name="submit" className="btn">SignUP</button>

            <p className="login-register-text">Already have an account? <a href="=" onClick={login}>Login Here ..</a></p>
          </form>
        </div>

      </section>
    </>
  )
}

export default Main