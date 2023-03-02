import React from 'react'
import iconAdd from "../../assets/addIcon.png";
function ButtonAdd(props) {
  return (
    <button className='rounded bg-[#FFCF01] p-2' {...props}>
        <img src={iconAdd} alt="" className='w-[24px] h-[24px]'/>
    </button>
  )
}

export default ButtonAdd