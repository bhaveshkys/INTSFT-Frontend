
import { useState } from 'react';
import './App.css';
import LowerNav from './components/LowerNav';
import Recorder from './pages/Recorder';
import Analyzer from './pages/Analyzer';
import Transcriber from './pages/Transcriber';
function App() {
  let output
  const [page,SetPage]=useState("recorder")
  /* console.log(page) */
  const sendDataToParent=(option)=>{
    /* console.log(option) */
    SetPage(option)
  }
  if(page=="analyzer"){
  output  = <Analyzer/>
  } else if(page=="transcriber"){
    output=<Transcriber/>
  } else{
    output=<Recorder/>
  }
  return (
    <div style={{backgroundColor:"black"}} className="App" >
    {output}
    <LowerNav sendDataToParent={sendDataToParent} />
    </div>
  );
}

export default App;
