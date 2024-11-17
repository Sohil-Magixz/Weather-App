import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx"
import MainComponent from "./components/MainComponent/MainComponent.jsx";
import fetchWeatherData from './api/weatherApi.js'

function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState();
  const [time, setTime] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [image,setImage] = useState();


  function curr_time(){
    const time = new Date();
    const utcHour = time.getUTCHours();
    return utcHour;
  }

  useEffect(() => {
    if (weatherData) {
      //console.log(weatherData)
      setCurrentWeather(weatherData.weather[0].main);
      setImage(weatherData.weather[0].icon)
    }
  }, [weatherData])
  
  const handleLocationUpdate = async ({ lat, lon }, city, times) => {
    //console.log(lat, lon)
    setCity(city);
    const data = await fetchWeatherData({ lat, lon })
    setWeatherData(data);
    const utc = curr_time();
    setTime(utc+Math.floor(data.timezone/3600));
    console.log(time)
  };

  return (
    <>
      <header>
        <HeaderComponent onLocationUpdate={handleLocationUpdate} times={time} />
      </header>
      <main>
        <MainComponent onWeatherUpdate={weatherData} name={city} times={time}  weather={currentWeather} icon={image}/>
      </main>
    </>
  )
}

export default App
