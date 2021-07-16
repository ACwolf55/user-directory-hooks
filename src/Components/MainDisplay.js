import React, { useEffect, useState } from "react";
import PersonDisplay from "./PersonDisplay";
import Edit from "./Edit"
import data from '../data'

function MainDisplay() {
  const [indexNum, setIndexNum] = useState(0);
  const [edit,setEdit] = useState(false)
  const [dataLen,setDataLen] = useState(data.length)


  function prevClick(e) {
    if (indexNum > 0) {
      setIndexNum((prevNum) => prevNum - 1);
    }
  }

  function nextClick(e) {
    if (indexNum < data.length-1) {
      setIndexNum((prevNum) => prevNum + 1);
      console.log(data.length)
      // setDataLen(dataLen)
  
    }
  }

  function deleteFunc(e){
    data.splice(indexNum,1)
   
    
  }

  function editFunc(e){
    setEdit(true)
  }

  return (
    <div className="main-display">
      {edit ? <Edit/> : <PersonDisplay indexNum={indexNum} edit={edit} data={data} dataLen={dataLen}/>}

      <div className="nav">
        <span className="prev" onClick={prevClick}>
          &#60; Previous
        </span>
        <div className="inner-buttons">
          <span className="blue-button" onClick={edit}>Edit</span>
          <span className="blue-button" onClick={deleteFunc}>Delete</span>
          <span className="blue-button">New</span>
        </div>
        <span className="next" onClick={nextClick}>
          Next &#62;
        </span>
      </div>
    </div>
  );
}

export default MainDisplay;
