const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

async function fetchWeatherData({lat, lon}){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        else{
            const data = await response.json();
            return data;
        }
    }
    catch(error){
        console.error("Failed to fetch weather data: ",error);
        throw error;
    }
}

export default fetchWeatherData;