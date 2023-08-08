import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/Alert"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// this is the one of the component
function App() {
  const [Mode ,setMode] = useState('light')   // this is the use to check whether the dark mode is enabled or not.
  const[Alert_msg, setAlert] = useState(null)// this for the Alert

  // function for the alert
  const showAlert = (message, type)=>{
    //we can set the objects also in the usestate variable function
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

   const togglemode =()=>{
     if(Mode ==='light'){ 
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Your mode has been set to Dark","Success")
      document.title = "Textify - DarkMode";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.title = "Textify - LightMode";
    }
  }
  return (
   
    <>
   
    {/* passing the props */}
    <Navbar title = "Textify" mode = {Mode} togglemode = {togglemode} />
    <Alert alert ={Alert_msg}/>
    {/* <BrowserRouter>
    <Routes>
       <Route path ="/" element={ */}
        <div className="container my-3">
        <Textform heading = "Enter the Text to analyse" mode = {Mode} showalert = {showAlert} />
      </div>
       {/* } />
       <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
