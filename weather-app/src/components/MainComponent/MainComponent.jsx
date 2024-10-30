import React, { useEffect, useState } from "react";
import WeatherBoxComponent1 from "../WeatherBoxComponent1/WeatherBoxComponent1.jsx";

function MainComponent({ onWeatherUpdate, name, times ,weather, icon}) {
    const [temp, setTemp] = useState(0);
    const [feels_like, setFeels_like] = useState(0)
    const [temp_min, setTemp_min] = useState(0)
    const [temp_max, setTemp_max] = useState(0);
    const [city, setCity] = useState(0);
    const [time,setTime ] = useState(0);


    useEffect(() => {
        if (onWeatherUpdate) {
            setCity(name)
            setTemp(onWeatherUpdate.main.temp)
            setFeels_like(onWeatherUpdate.main.feels_like)
            setTemp_min(onWeatherUpdate.main.temp_min)
            setTemp_max(onWeatherUpdate.main.temp_max)
            setTime(times)
        }
    }, [onWeatherUpdate, name,icon])
    return (
        <>
            <div className=" h-screen w-screen  mx-auto bg-blue-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:grid-cols-2 m3 p-3" /*style={{backgroundImage:`url(${image})`>}}*/>
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
                <div className="h-[30vh] bg-red-600 rounded-2xl p-3">
                    Component - 2 - Other details
                </div>
                <div className="bg-black rounded-2xl text-white p-3">
                    Component 3
                </div>
            </div>
        </>
    )
}

export default MainComponent;