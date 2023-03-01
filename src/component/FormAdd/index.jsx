import React from 'react'
import InputWithLabel from '../InputWithLabel'

function FormAdd(props) {
  return (
    <div className='px-8 flex flex-col gap-4 mt-8'>
        <InputWithLabel label={"Pengeluaran"}  placeholder={"Makanan - Fried Chicken"} type={"text"}/>
        <InputWithLabel label={"Biaya"} placeholder={"10000"} type={"number"}/>
    </div>
  )
}

export default FormAdd