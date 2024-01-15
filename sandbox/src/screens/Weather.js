import { useEffect, useState } from "react";

const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=Annecy";

function Weather() {
  const [temperature, setTemperature] = useState(null);
  async function fetchWeather() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTemperature(data);
  }

  useEffect(() => {
    fetchWeather();
  });

  if (temperature) {
    return <div>Il fait {temperature.current.temp_c}°C à Annecy</div>;
  } else {
    return <div>Chargement...</div>;
  }
}

export default Weather;
