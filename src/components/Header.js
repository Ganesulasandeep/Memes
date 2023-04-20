import React from "react";
import myImage from "../imag/doge.png";

export default function Header() {
  return (
    <header className="header">
      <img src={myImage} alt="My " className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      {/* <h4 className="header--project">React Course - Project 3</h4> */}
    </header>
  );
}
