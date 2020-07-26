import React from 'react';

console.log(process.env.REACT_APP_API_KEY)

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
      <div className="date">{dateBuilder(new Date())}</div>

      </main>
    </div>
  );
}

export default App;
