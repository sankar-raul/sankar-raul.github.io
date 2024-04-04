async function getTemperature(lat,lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f526858f3b1e4012abfdbd9ed3854011`);
        const data = await response.json();
        /*const temperature = data.main.temp;
        console.log(data);
        console.log(Math.round((data.main.temp - 273.15).toFixed(2)))
        console.log(data.sys)
        console.log(data.name)*/
        return data
    } catch (error) {
        console.log("Error fetching temperature:", error, lat,lon);
        
        
    }
}