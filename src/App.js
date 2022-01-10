import React from "react";
import Header from './components/Header';
import Home from './pages/Home/index.js';
import {useState} from 'react'
export default function App() {
  const [key,setKey] = useState(1)
  return (
    <>
      <Header/>
      <div className="vg__main">
            <Home key={key} refresh={()=>{setKey(key + 1)}}/>
        </div>
        </>
  );
}
