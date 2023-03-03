import React from 'react'
import iconUser from "../../assets/iconUser.png"
function Navbar(props) {
  return (
    <nav className='flex flex-col'>
        <p className='text-xs md:text-base font-normal'>
            Halo,
        </p>
        <div className='flex justify-between items-center'>
            <h1 className='text-base md:text-xl font-semibold'>
                {props.user ? props.user : "-"}
            </h1>
            <img src={iconUser} alt="" className='w-[24px] h-[24px] md:w-[30px] md:h-[30px]'/>
        </div>
    </nav>
  )
}

export default Navbar