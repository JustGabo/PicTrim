import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <ul className='lg:flex items-center gap-5 text-gray-300 hidden ml-10  text-xs'>
            <li className='menuBarItems'>Templates</li>
            <li className='menuBarItems'>Blog</li>
            <li className='menuBarItems'>Design screenshots</li>
            <li className='menuBarItems'>Pricing</li>
        </ul>
    </nav>
  )
}

export default NavBar