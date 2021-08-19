// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";
import WeatherCard from './Weather'

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState({});



  useEffect(() => {
    const fetchData = async() => {
      navigator.geolocation.getCurrentPosition( (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
 });
  }
  fetchData();
}, [lat, long]);

  return (
    <div className="App">
        {(typeof data.main != 'undefined') ? (
          <WeatherCard weatherData={data}/>
        ) : (
          <div>
          </div>
        )}    
      </div>
  );
}

export default App;
