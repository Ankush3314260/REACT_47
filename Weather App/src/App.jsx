import { useEffect, useState } from "react"

function App() {

  const [location,setLocation] =useState("")
  const [lon,setLon] =useState()
  const [lat,setLat] =useState()
 
  const [temp,setTemp]=useState()
  const [humidity,setHumidity]=useState()
  const [wind,setWind]=useState()
  const [utemp,setuTemp]=useState()
  const [uhumidity,setuHumidity]=useState()
  const [uwind,setuWind]=useState()

  const getinfo=(e)=>{
              setLocation(e.target.value) 
              
  }
  const weather =(e)=>{
    e.preventDefault()
    e.target.value="Geeting Result"
      const url = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=`
         const options = {method: 'GET', headers: {accept: 'application/json'}};
  
       fetch(url, options)
           .then(res => res.json())
             .then((json)=>{ 
                 setTemp(json.data.values.temperature)
                 setHumidity(json.data.values.humidity)
                 setWind(json.data.values.windSpeed)
                    e.target.value="SEARCH"
                    document.querySelector('#form1').reset()
             })
                .catch(err => console.error('error:' + err)); 
        }
   useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
       
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
        
        })
      }
      else{
        e.target.value="Not Get !!!!"
      }
   },[])
  const getLocation =(e)=>{
    e.preventDefault()
   e.target.value="Getting Result"
      //  if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position)=>{
       
      //     setLat(position.coords.latitude)
      //     setLon(position.coords.longitude)
        
      //   })
      // }
      // else{
      //   e.target.value="Not Get !!!!"
      // }
       const  url =`https://api.tomorrow.io/v4/weather/forecast?location=${lat},${lon}&apikey=`
         const options = {method: 'GET', headers: {accept: 'application/json'}};
  
       fetch(url, options)
           .then(res => res.json())
             .then((json)=>{ 
              console.log(json);
                 setuTemp(json.timelines.daily[0].values.temperatureAvg)
                 setuHumidity(json.timelines.daily[0].values.humidityAvg)
                 setuWind(json.timelines.daily[0].values.windSpeedAvg)
                       e.target.value="Click "
             
             })
               .catch(err => console.error('error:' + err) ,e.target.value="Click"); 
        
                  
  }
  

  return (
    <>
     <div className=" flex flex-wrap justify-evenly h-screen overflow-hidden  ">
        
      
        
        <div className=" relative top-24 w-60 h-72 bg-black/5 border-2 border-white rounded-xl backdrop-blur-sm max-sm:top-3 ">
             <div className="text-center w-full text-white">
              <form action="" method="get" id="form1">
                  <label htmlFor="search">Search Weather</label>
                  <br />
                  <input required className="p-2 rounded-xl mt-2 outline-none bg-transparent border-2 border-white" type="text" name="sreach" id="search" onChange={getinfo} />
                  
                  <input className="bg-green-200 text-black font-semibold p-2 mt-2 rounded-xl w-1/2 hover:cursor-pointer " onClick={weather} type="submit" value="SEARCH " />
              </form>
              <div className="relative top-3 space-y-3  ">
                <p className="m-1">Location :{location}</p>
                 <p className="m-1">Temprature :{temp} </p>
                 <p className="m-1">Wind Speed : {humidity}</p>
                 <p className="m-1 ">Humidity :{wind}</p>
              </div>
              </div>
        </div>
        <div className="relative z-30 flex  w-60 h-72 bg-white/5 border-2 border-white rounded-xl backdrop-blur-sm max-sm:top-3 top-24">
             <div className="text-center w-full text-white">
              <form action="" method="get">
                 <p>At Your Location</p>
                 
                  
                  <input className="bg-green-200 text-black font-semibold p-2 mt-2 rounded-xl w-1/2 hover:cursor-pointer " onClick={getLocation} type="submit" value="Click" />
                   <div className="relative top-6 space-y-3 ">
                 <p className="m-1">Temprature :{utemp}</p>
                 <p className="m-1">Wind Speed : {uhumidity}</p>
                 <p className="m-1 ">Humidity :{uwind}</p>
              </div>
              </form>
             
              </div>
        </div>
     </div>
    </>
  )
}

export default App
