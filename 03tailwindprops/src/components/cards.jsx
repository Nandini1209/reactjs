import React from 'react'

function Card({userName}) {
   console.log(userName);
    return (
        <><h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="chai.jpeg" />
      </div>
      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
    </>

    )
}

export default Card
