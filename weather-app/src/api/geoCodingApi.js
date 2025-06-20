const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

async function geoCodingApi(name){
    
    try{
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        else{
            const data = await response.json();
            const Data = {
                lat: data[0].lat,
                lon: data[0].lon
            };
            // console.log(Data);
            return Data;
        }
    }
    catch(error){
        console.error("Failed to fetch from API: ");
        throw error;
    }
}
export default geoCodingApi;