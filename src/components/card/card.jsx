import React from "react";
import "./card.css";

function Card() {
  return (
    <div>
      <div className="butten">
        <button style={{ background: "blue" }}>Word Explorer</button>
        <button style={{ color: "white" }}>Story Adventure</button>
        <button style={{ color: "white" }}>Brain Quest</button>
      </div>
      <div>
        <h3 style={{ fontWeight: "400" }}>
          Drag Pictures to thematchinf Words,lignt up correct pairs,shake for a
          retry
        </h3>
      </div>
      
    </div>
  );
}

export default Card;
