import React from 'react'
import iconAdd from "../../assets/addIcon.png";
function ButtonAdd(props) {
  return (
    <button className='rounded bg-slate-200 p-1' {...props}>
        <img src={iconAdd} alt="" className='w-[20px] h-[20px]'/>
    </button>
  )
}

export default ButtonAdd