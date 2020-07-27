import React, { useState } from 'react';

const api_key = process.env.REACT_APP_API_KEY;
const api_base = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api_base}weather?q=${query}&units=metric&APPID=${api_key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(weather);
      });
    }
  }
  
  const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July","August", "October", "November", "December"];
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  
  return `${day} ${date} ${month} ${year}`
  }
  return (
    <div>
      <main>
    <div className="App">
      
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search City ..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <i class="material-icons">search</i>
        </div>
        <div className="basic-box">
        <div className="date">{dateBuilder(new Date())}</div>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temperature">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
      
            
          </div>
        </div>
        ) : ('')}
      
    </div>
    </main>
    <footer><a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by vectorpocket - www.freepik.com</a></footer>
    </div>
  );
}

export default App;
