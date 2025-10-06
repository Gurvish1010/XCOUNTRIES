import { useEffect,useState } from 'react';
import './App.css';
import axios from "axios"


function App() {

  const[countries,setCountries] = useState([])

  useEffect(()=> {
    const fetchCountries = async ()=> {
      try{
        const res = await axios.get("https://xcountries-backend.labs.crio.do/all")
        setCountries(res.data)
      }catch(e){
        console.log("fetching data error:", e)

      }
    };

    fetchCountries();
  }, []);
  return (
    <div className="app">
      {countries.map((country)=> (
        <div key={country.abbr} className='card'>
          <img
          src={country.flag}
          alt={`${country.name} Flag`}
          className="flag"
          />
          <p className='countryName'>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
