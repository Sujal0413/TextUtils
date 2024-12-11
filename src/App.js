
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils-dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'Textutils-light mode';
    }


  }
  return (
    <>
      {/* <Router> */}

        <Navbar Title="Textutils" Home="Home"Aboutus="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title ="TextUtils" mode={mode}/> */}
        <Alert alert={alert} />
        <div className="container my-3 ">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
              
            {/* </Route> */}
            <Textform showAlert={showAlert} heading="Enter the text to anlayze below" mode={mode} />
              
            {/* </Route> */}
          {/* </Routes> */}




        </div>

      {/* </Router> */}


    </>
  );
}

export default App;
