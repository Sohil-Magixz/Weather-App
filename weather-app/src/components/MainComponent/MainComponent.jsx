import React, { useEffect, useState } from "react";
import WeatherBoxComponent1 from "../WeatherBoxComponent1/WeatherBoxComponent1.jsx";
import WeatherBoxComponent2 from "../WeatherBoxComponent2/WeatherBoxComponent2.jsx";

function MainComponent({ onWeatherUpdate, name, times ,weather, icon}) {
    const [temp, setTemp] = useState(0);
    const [feels_like, setFeels_like] = useState(0)
    const [temp_min, setTemp_min] = useState(0)
    const [temp_max, setTemp_max] = useState(0);
    const [city, setCity] = useState(0);
    const [time,setTime ] = useState(0);
    const [lat, setLat] = useState();
    const [lon,setLon] = useState();

    useEffect(() => {
        if (onWeatherUpdate) {
            console.log(onWeatherUpdate);
            setCity(name)
            setTemp(onWeatherUpdate.main.temp)
            setFeels_like(onWeatherUpdate.main.feels_like)
            setTemp_min(onWeatherUpdate.main.temp_min)
            setTemp_max(onWeatherUpdate.main.temp_max)
            setTime(times)
            setLat(onWeatherUpdate.coord.lat);
            setLon(onWeatherUpdate.coord.lon);
        }
    }, [onWeatherUpdate, name,icon])
    return (
        <>
            <div className=" h-screen w-screen  mx-auto bg-blue-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:grid-cols-2 m3 p-3">
                <WeatherBoxComponent1
                    prop={{
                        temp: temp,
                        feels_like: feels_like,
                        temp_max: temp_max,
                        temp_min: temp_min,
                        city: city,
                        time: time,
                        weather: weather,
                        icon: icon
                    }}
                />            
            </div>
        </>
    )
}

export default MainComponent;