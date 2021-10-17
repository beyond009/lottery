import { lottery } from "../../declarations/lottery";
import React, { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReactDOM from "react-dom";
import React from "react";
import "./App.css";

export default function App() {
  const [totalNumber, setTotalNumber] = useState();
  //   function animateValue(obj, start, end, duration) {
  //     let startTimestamp = null;

  //     const step = (timestamp) => {
  //       if (!startTimestamp) startTimestamp = timestamp;
  //       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //       //  console.log("progress",progress)
  //       obj.innerHTML = Math.floor(progress * (end - start) + start);
  //       if (progress < 1) {
  //         window.requestAnimationFrame(step);
  //       }
  //     };
  //     window.requestAnimationFrame(step);
  //   }
  //   function setNumber() {}
  const obj = document.getElementById("value");
  //  animateValue(obj, 100, 0, 5000);
  function handleClickLucky() {
    let winner = Math.floor(Math.random() * totalNumber) + 1;
    console.log(winner);
    obj.innerHTML = winner;
  }
  function handleClickSet() {
    const tmp = document.getElementById("outlined-basic").value;
    setTotalNumber(tmp);
  }

  return (
    <div className="app">
      <div className="app__box">
        <TextField id="outlined-basic" label="Set Number" variant="outlined" />
      </div>
      <br />
      <div className="app_box_button">
        <Button onClick={handleClickSet}>Set Number</Button>
      </div>
      <div className="app_number">抽奖的总人数是:{totalNumber}</div>
      <div id="value">66</div>
      <div className="app_lucky_button">
        <Button onClick={handleClickLucky}>Lucky One!</Button>
      </div>
      <br />
    </div>
  );
}
