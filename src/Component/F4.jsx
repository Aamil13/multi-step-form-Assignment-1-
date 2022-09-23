import React from 'react'
import Context from "../DataContext"
import { useContext } from 'react'

const F4 = () => {

    const {firstname,lastname,email,gender,
         country,city,state,zip,
         debitn,cvv,month,year,} = useContext(Context);

  return (
    <div className='p-4'>
        <h3 className='fw-light'>Form Data:</h3>
        <hr></hr>
        <p><span className='text-secondary'>First Name :</span> {firstname}</p>
        <p><span className='text-secondary'>Last Name :</span> {lastname}</p>
        <p><span className='text-secondary'>Email :</span> {email}</p>
        <p><span className='text-secondary'>Gender : </span>{gender}</p>
        <p><span className='text-secondary'>Country :</span> {country}</p>
        <p><span className='text-secondary'>State :</span> {state}</p>
        <p><span className='text-secondary'>City :</span> {city}</p>
        <p><span className='text-secondary'>Zip :</span> {zip}</p>
        <p><span className='text-secondary'>Debit/Credit nummber :</span> {debitn}</p>
        <p><span className='text-secondary'>Cvv : </span>{cvv}</p>
        <p><span className='text-secondary'>Month :</span> {month}</p>
        <p><span className='text-secondary'>Year : </span>{year}</p>
    </div>
  )
}

export default F4