import React from "react";
import "./maicard.css";

function MaiCard() {

  function openImageFullScreen(imageUrl) {
    window.open(imageUrl, "_blank");
  }

  return (
    <div style={{ margin: "50px" }} className="maincard1">
      <div style={{ width: "45%",height:"36rem" }} className="maincard">
        <p className="header ">
          <span className="two-color">Correction</span>
        </p>
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          corporis eius sed, maiores voluptatem ex! Autem quisquam porro, id
          maxime dolorem aliquid vero animi
        </p>
        <img
          style={{ padding: "8px" }}
          className="card-img-top"
          src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
          alt="Card image cap"
          onClick={() =>
            openImageFullScreen(
              "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            )
          }
        />
        <p style={{ color: "green", textAlign: "left" }}>
          {" "}
          Synomymus : <span>front end developer</span>
        </p>
        <p style={{ color: "yellow", textAlign: "left" }}>
          {" "}
          Anomymus : <span>front end developer</span>
        </p>
      </div>

      <div className=" card3">
        <div className="card4">
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesenti
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing e minus
                voluptatem eligendi facere?
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet c Eaque iure blanditiis natus
                sapiente culpa
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum,
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum, rerum
              </p>
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum, rerum
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum,
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum,
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum,
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "12rem", height: "18rem" }}>
            <img
              className="card-img-top"
              src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              alt="Card image cap"
              onClick={() =>
                openImageFullScreen(
                  "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
                )
              }
            />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit ratione cum,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaiCard;
