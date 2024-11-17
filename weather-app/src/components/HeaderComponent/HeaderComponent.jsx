import React, { useEffect } from "react";
import { useState } from "react";
import geoCodingApi from "../../api/geoCodingApi";

function HeaderComponent({ onLocationUpdate ,times}) {


    const [city, setCity] = useState();
    const [,setTime] = useState();
    const headerDefault = "flex justify-center items-center sm:justify-between  sm:items-center text-white header-bar w-screen mx-auto h-[10vh] rounded-b-xl"
    const [headerTheme, setHeaderTheme] = useState(headerDefault+" bg-slate-300");
    useEffect(()=>{

        if(times){
            times=times%24
            //console.log(times)
            if(times>18 || times<6){
                setHeaderTheme(headerDefault+" bg-black")
            }
            else if(times>5 && times<16){
                setHeaderTheme(headerDefault+" bg-blue-500")
            }
            else{
                setHeaderTheme(headerDefault+ " bg-orange-400")
            }
        }
    },[times])

    return (
        <>
            <div className={headerTheme}>
                <div className="sm:inline-flex justify-start items-start hidden ml-3">
                    <h1 className="text-[32px] font-bold drop-shadow-2xl shadow-inner">Weather App...</h1>
                </div>
                <div className="inline-flex justify-center items-center ml-2">
                    <input type="text" placeholder="Enter a place" className="text-black rounded-2xl px-3 py-1.5 mr-1" required onChange={(e) =>
                        setCity(e.target.value)
                    } />

                    <button type="submit" className="px-2 py-1.5 ml-2 rounded-2xl bg-white text-teal-950" onClick={async () => {
                        if (city != undefined) {
                            let locationData = await geoCodingApi(city);
                            //console.log(locationData)
                            if (locationData) {
                                onLocationUpdate(locationData, city, times);
                            }
                            setTime(times)
                        }
                    }}>Search</button>
                </div>
                <div className="w-[162.4px] sm:flex hidden">
                    Time:  
                    <p id="hr">00</p>:
                    <p id="min">00</p>:
                    <p id="sec">00</p>
                </div>

            </div>


        </>
    )
}
export default HeaderComponent;