
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from'./components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert, setalert] = useState()

  const callAlert= (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1000);
  }
  const changeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      callAlert(" Dark Mode enabled.","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      callAlert(" Dark Mode disabled.","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/About" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm callAlert={callAlert}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
