import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {Movememnt} from './useMovement'
export default function App() {
  const canvasRef = useRef(null);
  const upRef = useRef(null);
  const leftRef = useRef(null);
  const downRef = useRef(null);
  const rightRef = useRef(null);

  const {x,y,direction,handleDirection} = Movememnt();

  //component did mount
  useEffect(() => {
    //get context so that we can draw on canvas
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;

  }, []);


  //compoennt did update
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);

    let linkRef;

    if (direction === "up") linkRef = upRef;
    if (direction === "left") linkRef = leftRef;
    if (direction === "down") linkRef = downRef;
    if (direction === "right") linkRef = rightRef;

    //drawImage
    // context.fillRect(x, y, 100, 100)
    context.drawImage(linkRef.current, x, y);
    
  }, [x, y]);


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => handleDirection("up")}>Up</button>
        <button onClick={() => handleDirection("left")}>Left</button>
        <button onClick={() => handleDirection("down")}>Down</button>
        <button onClick={() => handleDirection("right")}>Right</button>
      </div>

      <div className="images">
        <img ref={downRef} src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img ref={rightRef} src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img ref={upRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img ref={leftRef} src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
