import {useState, useEffect} from 'react';

export function Movememnt(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState("down");

      // event listener on window
  useEffect(() => {
    console.log("I wdh oqwhdqw");
    function handleKeyDown(e) {
      if (e.key === "ArrowUp") {
        handleDirection("up");
      }
      if (e.key === "ArrowLeft") {
        handleDirection("left");
      }
      if (e.key === "ArrowDown") {
        handleDirection("down");
      }
      if (e.key === "ArrowRight") {
        handleDirection("right");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

    function handleDirection(direction) {
        if (direction === "up") {
          setDirection("up");
    
          setY((y) => (y < 0 ? 0 : y - 20));
        }
        if (direction === "left") {
          setDirection("left");
          setX((x) => (x < 0 ? 0 : x - 20));
        }
        if (direction === "down") {
          setDirection("down");
          setY((y) => (y < 0 ? 0 : y + 20));
        }
        if (direction === "right") {
          setDirection("right");
          setX((x) => (x < 0 ? 0 : x + 20));
        }
      }

      return {x,y,direction, handleDirection}


}