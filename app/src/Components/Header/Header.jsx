import React from 'react'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div className='w-screen p-3  bg-aqua'>
        <div className="flex px-20 items-center">
            <img src={Logo} alt="" className='w-12 text-white' />
            <span className='mt-3 ml-5 text-white text-[20px] font-bold font-avanir'>Alan Resto</span>
        </div>
    </div>
  )
}

export default Header