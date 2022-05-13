import React, { useState } from "react";
import cloud from "../resources/cloud.png";
import a2 from "../resources/a2.jpg";

const Home = (props) => {

  const [time, setTime] = useState()

  const weather = JSON.parse(localStorage.getItem("weather"));

  const date = new Date();
  const d = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  
  setInterval(() => {
      const date = new Date();
      setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }, 900);

  let day = ``;
  if (date.getDay() === 0) {
    day = "Sunday";
  } else if (date.getDay() === 1) {
    day = "Monday";
  } else if (date.getDay() === 2) {
    day = "Tuesday";
  } else if (date.getDay() === 3) {
    day = "Wednesday";
  } else if (date.getDay() === 4) {
    day = "Thursday";
  } else if (date.getDay() === 5) {
    day = "Friday";
  } else {
    day = "Saturday";
  }

  return (
    <div
      className="p-2 flex-fill bd-highlight"
      style={{
        backgroundImage: `url(${a2})`,
        height: "100vh",
        backgroundSize: "cover",
        width: "60%",
      }}
    >
      <button
        className="btn btn-dark text-light shadow-none"
        onClick={props.fetch}
      >
        Refresh
      </button>

      <div className="text-light align-left" style={{ fontSize: "10vw" }}>
        {weather.temperature} &#176;
        <img src={`${cloud}`} alt="weather"/>
      </div>

      {/* <div style={{ position: "absolute", bottom: "100px", left: "100px" }}> */}
      {/* <div className="row"> */}
      <div className="py-5 text-light" style={{ fontSize: "40px" }}>
        <div>
          <div>Ahmedabad</div>
          {time} - {day} - {d}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
