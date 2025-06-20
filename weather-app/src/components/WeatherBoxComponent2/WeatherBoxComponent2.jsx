import { useEffect, useState } from "react";
import React from "react";



function WeatherBoxComponent2({ latte, lonne }) {
    const [src, setSrc] = useState("");
    useEffect(() => {
        if (latte && lonne) {
            const newSrc = `https://www.openstreetmap.org/search?lat=13.1818&lon=80.0038#map=11/13.1818/80.0042`;
            setSrc(newSrc);
            console.log("Updated src:", newSrc);
        }
    }, [latte, lonne]);
    console.log(latte,lonne,src)
    return (<>
    <iframe 
        src={src}
        width="600" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </>);
}

export default WeatherBoxComponent2;