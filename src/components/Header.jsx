import React from 'react';
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <div className="headerr">
    <header className="header">
      <h1 className="logo">BrainyLingo</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Leaderboard</a></li>
          <li><a href="#">Daily Quiz</a></li>
          <li><a href="#" style={{backgroundImage: 'linear-gradient(to right, #ff0000, #ff6600, #ffcc00, #33cc33)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Genre<i class="fa fa-caret-down"></i></a>
          </li>
        </ul>
      </nav>
      <button className="sign-up-btn" >Sign out</button>
    </header>
    <div className='headerrr'> <span style={{color:'blue' }}>The Lost City Of</span> Futher Earth </div>
   
    </div>
  );
}

export default Header;
