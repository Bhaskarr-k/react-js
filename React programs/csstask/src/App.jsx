import React from "react";
import image1 from "./assets/image1.jpeg";
import "./styles/external.css"


function App(){
  return(
    <>
    <header class="header-page">
      <figure>
        <img src={image1} alt="" />
      </figure>
      <ul class="main">
        <li class="list">HTML</li>
        <li class="list">CSS</li>
        <li class="list">JAVASCRIPT</li>
        <li class="list">REACT JS</li>
      </ul>
      </header>
    </>
    
  )
}

export {App}