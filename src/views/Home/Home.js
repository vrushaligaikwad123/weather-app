import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
function Home(){
    const[city, setCity] = useState('Pune')
    const[temperature, setTemperature] = useState(0)
    const[message, setMessage] = useState('');
    async function loadWeatherInfo(){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`)
        setTemperature((response.data.main.temp - 273).toFixed(2));
        setMessage('☑ Data fetched successfully...');
        }
        catch(err){
            setTemperature(0);
            setMessage('City not found');
        }
    }
    useEffect(()=>{
        loadWeatherInfo()
    }, [{city}])
    return(
        <div>
            <h1 className="app-title">Weather For {city}</h1>
            <input type="text" 
            className="search-bar" 
            placeholder="Enter City"
            value={city}
            onChange={(e)=>{
                setCity(e.target.value)
            }}
            />
            <p className="msg-text"> {message} </p>
            <h1 className="temperature-text">Temperature: {temperature} °C</h1>
            
        </div>
    )
}
export default Home