import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const myKey="04f964a611921652ce825da6e8b60ff6";
  const [city,setCity]=useState();
  const [searchCity,setSearchCity]=useState("");
  useEffect(()=>{
async function getMyApi(){
  try {  
    //const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${myKey}&units=metric`);
    //const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${myKey}&units=metric`);
    const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${myKey}&units=metric`);
  console.log(res);
setCity(res.data); 
} catch (error) {
    console.error(error)
  }
}
 getMyApi();
  },[searchCity]);
  return (
    <div className="App"> 
    <div >
<input
onChange={(e)=>setSearchCity(e.target.value)}
type="text"

/>
<City city={city}/>
    </div>
      </div>
  );
}

export default App;
