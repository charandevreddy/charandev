import React from 'react'

const Year = ({children}) => {
    return (
        <h3 className='text-xl font-bold mb-2 tracking-tight'>
            {children}
        </h3>
    )
}

const Ruler = () => {
    return (
      <div className="border border-zinc-600 dark:border-zinc-200 w-full my-8" />
    );
  };

const Milestone = (props) => {
    return (
      <li className="mb-4 ml-2">
        <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </g>
          </svg>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            {props.title}
          </p>
        </div>
        <p className="text-zinc-700 dark:text-zinc-400 ml-6">{props.children}</p>
      </li>
    );
};

const timeline = () => {
  return (
    <div className='w-full'>
        <h1 className='text-4xl font-bold mb-4 mt-10 '>Timeline</h1>
        <Year>2023</Year>
        <ul>
            <Milestone title='HCLtech internship 💼'>Got selected for a Project-based internship program by HCL</Milestone>
            <Milestone title='Red Hat Certified System Administrator 📜'>From not even knowing what is redhat to cracking the exam, It was a big deal</Milestone>
            <Milestone title='Invited as Speaker for a event 🗣️'>For the First time I was invited to take a hand on session on CTF for an event called "abyssal CTF"</Milestone>
            

        </ul>
        <Ruler/>
        <Year>2022</Year>
        <ul>
            <Milestone title='2nd in UBERTech CTF 👾'>Secured 2nd position in UBERTech CTF'23 conducted by SRM university</Milestone>
            <Milestone title='Joined AIESEC in Chennai ✨'>One of the beast decision that I have taken, Connected to amazing minds!</Milestone>
            <Milestone title='3rd in SIST CTF 23 🎉'>Guess what? it was my first CTF and I secured 3rd place</Milestone>
        </ul>
        <Ruler/>
        <Year>2021</Year>
        <ul>
            <Milestone title='Joined College 🏫'>One of the worst decision I ever taken in my life</Milestone>
            <Milestone title='Taught Coding </>'>Learnt C++ through youtube videos</Milestone>
            <Milestone title='Made my First website 🎉'>made a static website using HTML and CSS and hosted it</Milestone>
            <Milestone title='Went 2🌟 on codechef'>but eventually got down to 1 star :-:</Milestone>
        </ul>
        <Ruler/>

    </div>
  )
}

export default timeline