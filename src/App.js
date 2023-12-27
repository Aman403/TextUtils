import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1000);
  }

  const togglemode=()=>{
     if(mode==='light')
     {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
     }
     else{
      setmode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
     }
  }
  return (
    <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
             
          </Route>
  </Routes>
  </div>
  </Router>
  );
}

export default App;
