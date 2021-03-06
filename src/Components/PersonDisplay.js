
import React, {useState, useEffect} from 'react'
// import data from '../data'


	
function PersonDisplay(props) {
  

  useEffect(()=>{

  })

  return(
    
    <div className='person-display'>
        <div className='name-id-top'>
        <h1 id='name'>{props.data[props.indexNum].name.first} {props.data[props.indexNum].name.last}</h1>
            <h5 id='index25'>{props.data[props.indexNum].id}/25</h5>
            </div>
        
            <h3 id='from'><b>From: </b> {props.data[props.indexNum].city}</h3>
            <h3 id='job_title'><b>Job Title: </b>{props.data[props.indexNum].title}</h3>
            <h3 id='employer'><b>Employer: </b>{props.data[props.indexNum].employer}</h3>
            <br></br>
          <ol id='fav_movies'><b>Favorite Movies: </b>
          <br></br>
        {props.data[props.indexNum].favoriteMovies.map((el,index)=><li>{index+1+'. ' + el}</li>)
          }</ol>
    </div>
     
   
    

  )
}



export default PersonDisplay