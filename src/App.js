import React, { useState } from 'react';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App(){
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});

const search = evt => {
  if(evt.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&units=metri&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      setWeather(result)
    });
      
  }
}

  const dateBuilder = (d) => {
    let months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? 'app warm' : 'app') : 'app'}>
   <main>
     <div className="search-box">
       <input 
       type="text"
       className="search-bar"
       placeholder="Search..."
       onChange={e => setQuery(e.target.value)}
       value={query}
       onKeyPress={search}
       />
     </div>
     {(typeof weather.main != "undefined") ? (
       <div>
     <div className="location-box">
       <div className="location">{weather.name}, {weather.sys.country}</div>
       <div className="date">{dateBuilder(new Date())}</div>
     </div>
     <div className="weather-box">
     <div className="temperature">{Math.round(weather.main.temp - 273.15)}°C</div>
     <div className="temperature">{Math.round(((weather.main.temp - 273.15 )* (9/5)) + 32)}°F</div>
     <div className="weather">{weather.weather[0].main}</div>
     <img src ={`http://openweathermap.org/img/w/${weather.main.icon}.png`} 
         alt="wthr img" />
     <div className="weather">{weather.weather[0].description}</div>
     <div className="weather">{weather.main.pressure} mb</div>
     <div className="weather">{weather.main.humidity} %</div>
     <div className="weather">{weather.wind.speed} m/s</div></div>
       </div>
       ) : ('')}
    
   </main>
    </div>
  );
}

export default App;