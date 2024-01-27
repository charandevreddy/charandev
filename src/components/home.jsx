import React from 'react'

import logo from '../assets/avatar1.jpg'
import Projectcard from './projectcard.jsx'
import Certficate from './certifcates.jsx'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl border-zinc-200 dark:border-zinc-700 mx-auto mb-8">
      <div className='flex justify-evenly flex-col-reverse sm:flex-row text-left place-items-start py-7 sm:py-20'>
        <div className='flex flex-col pt-10 sm:pt-0 '>
          <h1 className='font-bold text-2xl pb-2'>Hey there,</h1>
          <h1 className='font-bold text-5xl pb-1 tracking-tight'>I'm Charan Dev Reddy</h1>
          <h2 className="text-zinc-800 text-lg dark:text-zinc-200 mb-4 font-semibold"> Student 🎓, Frontend developer👨🏽‍💻, Looking for Internships</h2>
          <p className='text-base pt-2'> Cybersecurity enthusiast, F1 Fanatic🏎️, Active CTF Player,<br/>RedHat Certified System Administrator. Currently building projects on Network Security. 
          <br/>Ping me if there are any CTF's happening around</p>
          <p className='mt-6'>
            Check me on socials{' '}
            <Link target='_blank' to="https://www.linkedin.com/in/charan-dev-reddy-4b3130212/"><u>LinkedIn</u></Link>,{' '}
            <Link target='_blank' to="https://instagram.com/charandevreddy"><u>Instagram</u></Link>,{' '}
            {' and '}
            <Link target='_blank' to="https://github.com/charandevreddy"><u>GitHub</u></Link>.
          </p>
        </div>
        <div className='pl-7 w-80'>
          <img src={logo} alt='thats me' className=' rounded-full' /> 
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-1 w-full mb-16">
      <h1 className='font-bold text-2xl pb-2'>🛠️ These are some of my Projects :</h1>
      <Projectcard 
      title="📈 GPAcalcy"
      url="https://gpacalcy.vercel.app/"
      github="https://github.com/charandevreddy/GPAcalcy"
      desc="You can calculate your semester GPA through this if your college doesn't provide you with a GPA like my college. It's in a scale of 10"
      />
      <Projectcard 
      title="🥘 CookGenie"
      url="https://cookgenie.vercel.app/"
      github="https://github.com/charandevreddy/Cookgenie"
      desc="For a thought of cooking something and a Question about what to cook, then Cookgenie would be the place to get instant recipes with your given requirements and conditions.
      Made using ReactJS, Tailwindcss and API's"
      />
      <Projectcard 
      title="🗃️ Personal Portfolio"
      url="https://cookgenie.vercel.app/"
      github="https://github.com/charandevreddy/Cookgenie"
      desc="For a thought of cooking something and a Question about what to cook, then Cookgenie would be the place to get instant recipes with your given requirements and conditions.
      Made using ReactJS, Tailwindcss and API's"
      />
      <Projectcard 
      title="🪪 Socially-Card"
      url="https://charandevreddy.github.io/portfolio/"
      github="https://github.com/charandevreddy/portfolio"
      desc="A Simple Static website which contains your basic details and social links for quick access of all at one place"
      />
      

      </div>
      <div className='grid gap-4 sm:grid-cols-1 w-full mb-16'>
      <h1 className='font-bold text-2xl pb-2'>📜 These are some of my Certificates :</h1>
        <Certficate
        title="📋 Red Hat Certified System Administrator"
        url="https://rhtapps.redhat.com/verify?certId=230-163-446"
        desc="Red Hat Enterprise Linux 9, The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200)."
        />
        {/* <Certficate
        title="🪪 Socially-Card"
        url="https://charandevreddy.github.io/portfolio/"
        github="https://github.com/charandevreddy/portfolio"
        desc="A Simple Static website which contains your basic details and social links for quick access of all at one place"
        /> */}
      </div>
      

    </div>
    
  )
}

export default home