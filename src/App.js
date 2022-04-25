import React, {useState} from 'react'
import axios from 'axios'
function App(){
  const [data,setData] = useState({})  
  const [location, setLocation] = useState('')  
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0ffb95cf625203facc4395e4b3974551`
const searchLocation =(event) =>{
  if (event.key === 'Enter') {
    axios.get(url).then((response)=> {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('') 
  }
}
  return (
    <div className='app'>
     <div className='search'>
       <input
       value={location}
       onChange={event => setLocation(event.target.value) }
       onKeyPress={searchLocation}
       placeholder='Enter Location'
       type='text'/>
     </div>
     <div className='container'>   
       <div className='top'>
       <div className='location'>    
       <p>{data.name}</p>
       </div> 
       <div className='temp'>
       {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
       </div>
       <div className='description'>
       {data.weather ? <p>{data.weather[0].description }&deg;C</p> : null}
       </div>
       </div>

       {data.name !== undefined && 
        <div className='bottom'>
        <div className='feels'>
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;C</p> : null}
        <p>Feels_Like</p>
          </div>
         
          <div className='humidity'>  
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>Humidity</p>
        </div>
        <div className='wind'>
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
          <p>Wind Speed</p>
        </div>
        <div className='time'>
        {data.timezone ? <p className='bold'>{data.timezone.toFixed()}T-M</p> : null}
          <p>Time-zone</p>
        </div>
        <div className='sunset'>
        {data.sys.sunset ? <p className='bold'>{data.sys.sunset.toFixed()}</p> : null}
          <p>SunSet</p>
        </div>
        <div className='country'>
        {data.sys? <p className='bold'>{data.sys.country}</p> : null}
          <p>Country</p>
        </div>  
          </div>
       }
       </div>
</div>
  );
}

export default App;
