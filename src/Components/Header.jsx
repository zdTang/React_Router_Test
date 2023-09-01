import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-auto my-5' >
      <img className="h-5 cursor-pointer" src="images/logos/logo.svg"></img>
      <ul className='flex space-x-10'>
            <li>Home</li>
            <li>Offers</li>
            <li>Sign in</li>
      </ul>

    </div>
    
  )
}
