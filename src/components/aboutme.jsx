import React from 'react'
import Timeline from './timeline.jsx'
import {Link} from 'react-router-dom';


const  aboutme = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 py-20 ">
      <div>
        <h1 className='font-bold text-5xl pb-5'>About Me 👤</h1>
        <p className='text-base pt-5'>
        Hello! I'm Charan Dev Reddy, a pre-final year student and developer.
         I'm very passionate about building projects and software that make a difference in our lives,
          simplifying processes. I am currently seeking internship opportunities as a front-end web developer.
        </p>
        <p className='text-base pt-5'>
        I spent my formative years in Hyderabad and completed my schooling at Shantiniketan vidyalaya. 
        Currently, I am pursuing my B.E. in the Computer Science and Engineering with a 
        specialization in cybersecurity  at Sathyabama University in Chennai.
        </p>
        <p className='mt-6'>
            Check me on socials{' '}
            <Link to="https://www.linkedin.com/in/charan-dev-reddy-4b3130212/"><u>LinkedIn</u></Link>,{' '}
            <Link to="https://instagram.com/charandevreddy"><u>Instagram</u></Link>,{' '}
            {' and '}
            <Link to="https://github.com/charandevreddy"><u>GitHub</u></Link>.
          </p>
      </div>
       
      
      <Timeline/>



    </div>
  )
}

export default  aboutme

