import React from "react";
import "./card.css";
import logo from "../image/image.png"

function Card() {
  return (
    <div>
      <div className="butten">
        <button className="bg"><img src={logo} /><span>Word Explorer</span></button>
        <button style={{ color: "white" }}><img src={logo} /><span>Story Adventure</span></button>
        <button style={{ color: "white" }}><img src={logo} /><span>Brain Quest</span></button>
      </div>
      <div>
        <h3 className="headline" style={{ fontWeight: "400" }}>
          Drag Pictures to thematchinf Words,lignt up correct pairs,shake for a
          retry
        </h3>
      </div>
      
    </div>
  );
}

export default Card;
