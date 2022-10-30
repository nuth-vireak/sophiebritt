import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[72px] z-10 flex justify-between px-10'>
        <div className='flex items-center'>
            <img src="" alt="" />
            <h1>Sophie Brittain</h1>
        </div>
        <ul className='flex items-center'>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar