import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/pfp.png'
import toggle_light from '../../assets/moon.png'
import toogle_dark from '../../assets/w-sun.png'
import resume from '../../../charan_dev_resume.pdf'


const navbar = ({theme , setTheme}) => {

    const [menuopen,setMenuopen] = useState(false)

    const toggle_mode =() =>{
        theme === 'light' ? setTheme('dark'): setTheme('light')
    }
  return (
    <div className='navbar'>
        <img src={logo} alt='Me' className='logo'/>
        
         <div className='menu' onClick={() => {setMenuopen(!menuopen)}}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
         </div>
         
         <img src={theme === 'light' ? toggle_light:toogle_dark} alt='' className='toggle-button' onClick={() => {toggle_mode()}} />
         <div>
          <ul className={menuopen ? "open": ""} onClick={ () => {setMenuopen(!menuopen)}}>
            <li><b><NavLink to='/Home' target='_top' >Home</NavLink></b></li>
            <li><b><NavLink to='/Aboutme' target='_top'>About Me</NavLink></b></li>
            <li><b><NavLink target="_blank" to='https://medium.com/@charandevreddy/life-seems-that-it-completed-within-a-snap-but-not-e20c47ef79ed'>Blogs</NavLink></b></li>
            <li><b><a href={resume} target="_blank">Resume</a></b></li>
         </ul>
         </div>


        
    </div>
  )
}

export default navbar