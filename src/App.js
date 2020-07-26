import React from 'react';

const api = {
  key : process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

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
    <div clasName="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Type ..."
        />
        </div>
      <div className="basic-box">
      <div className="date">{dateBuilder(new Date())}</div>
      <div className="location">
        Seoul, South Korea</div>
      </div>

      <div className="weather-box">
      <div className="temp">23 c</div>
      <div className="weather">Sunny</div>
      </div>
      </main>
    </div>
  );
}

export default App;
