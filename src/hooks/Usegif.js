import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (text) => {
    const [gif,setgif]=useState("");
    const[loading,setloading]=useState(false);
      async function fetchData(){
        setloading(true);
        
        const {data}=await axios.get(text?`${randomurl}&tag=${text}`:url);
        const imgsourc=data.data.images.downsized_large.url;
        setgif(imgsourc);
        setloading(false);
      }
      useEffect(()=>{
    fetchData(); 
  },[])
  return{gif,loading,fetchData};
}

export default useGif
