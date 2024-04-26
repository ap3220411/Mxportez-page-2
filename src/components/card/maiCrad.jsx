import React from "react";
import "./maicard.css"

function MaiCard() {
  return (
    <div style={{ margin: "50px" }} className="maincard1">
      <div style={{ width: "40%" }} className="maincard">
        <div className="card">
          <p className="header">
            Correction
          </p>
          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            corporis eius sed, maiores voluptatem ex! Autem quisquam porro, id
            maxime dolorem aliquid vero animi suscipit recusandae facere saepe
            omnis molestiae!
          </p>
          <img style={{padding:"20px"}}
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <p style={{color:"green",}}> Synomymus : <span>front end developer</span></p>
          <p style={{color:"yellow"}}> Anomymus :   <span>front end developer</span></p>
         
          
        </div>
      </div>
      <div className=" card3">
      <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesenti</p>
           
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing e minus voluptatem eligendi facere?</p>
           
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet c Eaque iure blanditiis natus sapiente culpa quos ut corrupti quod delectus ex!</p>
            
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione cum, rerum officia eum quis voluptates consequuntur labore </p>
            
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione cum, rerum officia eum quis voluptates consequuntur labore </p>
            
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/${data?.Image}"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione cum, rerum officia eum quis voluptates consequuntur labore </p>
            
          </div>
        </div>
      </div>
      </div>
  
  );
}

export default MaiCard;
