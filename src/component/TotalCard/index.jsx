import React from 'react'
import ButtonAdd from '../ButtonAdd'
import { useNavigate } from 'react-router-dom'
function TotalCard(props) {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation("/add")
  }
  return (
    <div className='flex flex-row justify-between items-center px-8'>
        <div className='flex flex-col gap-1'>
            <h3 className='text-whiteTitle text-xs font-medium'>Total Pengeluaran</h3>
            <p className='text-primaryBlue text-md font-normal'>Rp.9.089.999</p>
        </div>
        <div className='flex justify-center items-center'>
            <ButtonAdd onClick={handleClick}/>
        </div>
    </div>
  )
}

export default TotalCard