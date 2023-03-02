import React from 'react'
import { useSelector } from 'react-redux'
import cardBG from "../../assets/cardBalance.png"
import {getMonth} from "../../utils/getMonth"
function CardBalance(props) {
  const {total} = useSelector((state) => state.money)

  return (
    <div className='border border-[#D8D8D8] rounded-[10px] text-black p-[30px] w-[100%]' style={{background : `url(${cardBG}) no-repeat`,backgroundSize : "100%" }}>
        <h2 className='text-base font-semibold mb-[31px]'>{getMonth(new Date().getMonth())}</h2>
        <div className='flex flex-col gap-[5px]'>
            <p className='text-xs font-light'>Total Pengeluaran</p>
            <p className='text-2xl font-semibold'>Rp{total ? total : "0"}</p>
        </div>
    </div>
  )
}

export default CardBalance