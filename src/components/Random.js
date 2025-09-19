import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/Usegif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const{gif,loading,fetchData}=useGif();
  function changegif(){
    fetchData();
  }

  return (
    <div className='gif1'>
        <h2><u>A RANDOM LIST</u></h2>
        {loading?(<Spinner/>):(<img src={gif} alt="gif"width="300"/>)}
        <button onClick={changegif}>GENERATE</button>
      </div>
  )
}

export default Random
