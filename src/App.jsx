import { useEffect, useState } from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import './App.css'
export default function App() {
  
  return (
    <div className="background">
      <h1 className="heading">Random Gif</h1>
      <Random/>
      <Tag/>
    </div>
  );
}
