import React,{ useState } from "react";
import './App.css'

import Application from "./components/Application";

function App() {
    const [mode, setMode] = useState('Dark');

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'floralwhite';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';

    }
  }
 
    return (
    <>
    <Application mode={mode} toggleMode={toggleMode}/>
    </>
    )
}


export default App;