import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWZjZmU5YWMzY2QyZWJmNDVlM2ZlZWI0ZmQ5NDhlZSIsIm5iZiI6MTc1NTE2OTUzMS41NzIsInN1YiI6IjY4OWRjMmZiYTEwMGZmZmYyMDVkMjNiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPVBxp60gFuh3yKjJaiwTDlVFy3C6PPDVrmY5Nf5UI0'
  }
};

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.</p>
      </div>
    </div>
  )
}

export default Player
