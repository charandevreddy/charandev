import { useState } from 'react';
// import { Navigate } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import Aboutme from './components/aboutme.jsx'
import Footer from './components/footer.jsx'
// import home from './components/ho/me/home.jsx';



function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`Container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        {/* <Navigate to="/Home" /> */}
        <Route path="*" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path='/Aboutme' element={<Aboutme/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
