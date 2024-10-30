import React, { useState } from "react";
import { useEffect } from "react";


function WeatherBoxComponent1({prop}){
    const [theme, setTheme] =  useState("h-[50vh] text-end flex flex-col justify-end rounded-2xl p-3 bg-no-repeat");
    const [bgimage,setBgimage] = useState();
    let weathericon;
    let color="";


    useEffect(()=>{


        if(prop.time>6 && prop.time<18){
            //console.log(prop.weather)
            if(prop.weather=="Clouds" || prop.weather=="Haze"){
                color = " bg-blue-500"
            }
            else if(prop.weather=="Clear"){
                color=" bg-blue-600"
            }
            else if(prop.weather=="Rain"){
                color=" bg-blue-600"
            }
            else if(prop.weather=="Thunderstorm"){
                color = " bg-blue-900 text-white font-bold"
            }
            else{
                color=" bg-blue-200"
            }
        }
        else if(prop.time>17 && prop.time<20){
            color=" bg-blue-800"
        }
        else{
            if(prop.weather=="Cloudy"){
            }
            color = " bg-black text-white"
        }






        setTheme(" text-end flex flex-col justify-end rounded-2xl p-3 bg-contain bg-no-repeat bg-center"+color);
        setBgimage(weathericon) 
        //console.log(theme);
        const fetchIcon = async () => {
            if(prop.icon){
                const response = await fetch(`https://openweathermap.org/img/wn/${prop.icon}@2x.png`)
                setBgimage(response.url)
            }
        }
        fetchIcon();

    },[prop])

    
    return(
        <>
        <div className={theme+" h-auto"}>
            <div className={theme+" h-[100px]"} style={{backgroundImage: `url(${bgimage})`}}>
            </div>
                <div className="bg-[rgba(0,0,0,0.3)] text-white rounded-2xl p-3 overflow-auto">

                    <h1>Location: {prop.city}</h1>
                    <h1>Weather: {prop.weather}</h1>
                    <h1 className="text-[32px] ">Temperature : {prop.temp}°C</h1>
                    <h3>Feels Like: {prop.feels_like}</h3>
                    <h4 className="text-">Maximum Temperature: {prop.temp_max}</h4>
                    <h4>Minimum_Temperature: {prop.temp_min}</h4>
                </div>
        </div>
        </>
    )
}

export default  WeatherBoxComponent1;