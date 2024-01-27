import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div className="flex flex-col  max-w-3xl border-zinc-200 dark:border-zinc-700 mx-auto mb-8">
        <div className='flex flex-col sm:flex-row justify-evenly text-lg'  >
        <Link target='_blank' to="https://www.linkedin.com/in/charan-dev-reddy-4b3130212/"><u>LinkedIn</u></Link>
        <Link target='_blank' to="https://instagram.com/charandevreddy"><u>Instagram</u></Link>
        <Link target='_blank' to="https://github.com/charandevreddy"><u>GitHub</u></Link>
        </div>
        

    </div>
  )
}

export default footer