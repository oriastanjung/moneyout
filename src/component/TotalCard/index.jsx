import React, { useEffect } from 'react'
import ButtonAdd from '../ButtonAdd'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {test} from "../../store/reducer/moneySlice/moneySlice"
function TotalCard(props) {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation("/add")
  }
  const dispatch = useDispatch()
  const {total} = useSelector((state) => state.money)
  useEffect(() => {
    // dispatch(test())
  },[])
  return (
    <div className='flex flex-row justify-between items-center px-8'>
        <div className='flex flex-col gap-1'>
            <h3 className='text-whiteTitle text-xs font-medium'>Total Pengeluaran</h3>
            <p className='text-primaryBlue text-md font-normal'>Rp.{total}</p>
        </div>
        <div className='flex justify-center items-center'>
            <ButtonAdd onClick={handleClick}/>
        </div>
    </div>
  )
}

export default TotalCard