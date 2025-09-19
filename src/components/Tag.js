import React from 'react'
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useGif from '../hooks/Usegif';

const Tag = () => {
  const[text,settext]=useState("");
  const {gif,loading,fetchData}=useGif(text);
  function changetext(e){
    settext(e.target.value);
  }
  function changegif(){
    fetchData();
  }
 
  return (
    <div className='gif2'>
        <h2><u>RANDOM CUTE {text} GIF</u></h2>
        {loading?(<Spinner/>):(<img src={gif} alt="gif"width="300"/>)}
        <input type='text' value={text} onChange={changetext}></input>
        <button onClick={changegif}>GENERATE</button>
      </div>
  )
}

export default Tag

