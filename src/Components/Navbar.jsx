import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-40 bg-blue-500 '>
        <nav>
            <ul className='px-10 py-2 justify-between flex flex-row items-center'>
                <li className='text-red-700 font-bold text-2xl'> <Link to='/Homepage' >HomePage</Link> </li>
                <li className='text-green-500 font-bold text-2xl'><Link to='/About'> About</Link></li>
                <li className='text-pink-950 font-bold text-2xl'><Link to='/Blog'> Blog</Link></li>
                <li className='text-black font-bold text-2xl'><Link to='/Services'> Services</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar