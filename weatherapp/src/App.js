import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function App() {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    fetchWeather();
  }, []);

  setInterval(() => {
    fetchWeather()
  }, 600000);

  const fetchWeather = async () => {
    setProgress(0)
    const url = `https://dataservice.accuweather.com/currentconditions/v1/188139?apikey=GA7BFl2QnqC1m7EZCPJFden8d51qAq7A&details=true`;
    setProgress(20)
    const response = await fetch(url);
    setTimeout(() => {
      setProgress(50)  
    }, 1000);
    const json = await response.json();
    setTimeout(() => {
      setProgress(80)  
    }, 1000);

    const w = JSON.stringify({
      temperature: json[0].Temperature.Metric.Value,
      humidity: json[0].RelativeHumidity,
      uv: json[0].UVIndex,
      uvText: json[0].UVIndexText,
      rain: false,
    });
    localStorage.setItem("weather", w);
    setProgress(100)
  };

  return (
    <div className="App">
      <LoadingBar
        color="#f11946"
        transitionTime={3000}
        loaderSpeed={3000}
        progress={progress}
      />
      <a
        target="_blank"
        href="https://icons8.com/icon/iOnufE9Xw9Dc/partly-cloudy-day"
        rel="noreferrer"
        >
        {/* // eslint-disable-next-line */}
      </a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        {/* // eslint-disable-next-line */}
      </a>
      <div className="d-flex bd-highlight">
        <Home fetch={fetchWeather} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
