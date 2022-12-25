import '../src/App.css'
import React, { useEffect, useState } from "react"


 
const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])





  

  return (
    <div>
     <nav>
       <span><b>Where in the world?</b> </span>
       <p>  Dark mode</p>
     </nav>
     <div className='inp_dev'>
      <input type={'text'} placeholder={'    Search for country...'}></input>
<select name="cars" id="cars">
    <option value="africa">Africa</option>
    <option value="americas">Americas</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>

</select>
     </div>
     <div className='cards'>
    <div className='card__1'>
      <img src='{flag.svg}'></img>
     </div>
     <div className='card__2'>
      <img src='{flag.svg}'></img>
     </div>
     <div className='card__3'>
      <img src='{flag.svg}'></img>
     </div>
     <div className='card__4'>
      <img src='{flag.svg}'></img>
     </div>
   
    </div>
    </div>
  );
  
}
export default UsingFetch

