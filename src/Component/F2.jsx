import React from 'react'
import "./f.scss"
import Context from "../DataContext"
import { useContext } from 'react'
const F2 = () => {

    const { country,setCountry,city,setCity,state,setState,zip,setZip,step,setStep,error,setError} = useContext(Context)


    const validate = ()=>{
        if(!country || !state || !city || !zip){
            return setError("All feilds are required")
        }else if(zip.length !== 6){
                return setError("Zip should be of 6 digit")
        
        }else{
            setError('')
            setStep(step+1)
        }
    }

  return (
    <div className='caclh p-4' >
        <h1 className='text-center fw-light mb-5'>Address Details</h1>
    
    <div className='mb-3'>
        <label>Country</label>
        <input value={country} onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Enter country name'/>
    </div>

    <div className='mb-3'>
        <label>State</label>
        <input value={state} onChange={(e)=>setState(e.target.value)} className='form-control' placeholder='Enter state name'/>
    </div>

    <div className='mb-3'>
        <label>City</label>
        <input value={city} onChange={(e)=>setCity(e.target.value)}  className='form-control' placeholder='Enter city name'/>
    </div>

    <div className='mb-3'>
        <label>Zip Code</label>
        <input value={zip} onChange={(e)=>setZip(e.target.value)} type="number" className='form-control' placeholder='Enter zip code'/>
    </div>

    {error && <p className='text-danger text-center'>{error}</p>}

    <div className='d-flex justify-content-between mt-5'>
    
    <button className='btn btn-outline-secondary shadow w-25'onClick={()=>setStep(step-1)}>Prev</button>

    <button className='btn btn-outline-primary shadow w-25'onClick={validate}>Next</button>
    </div>
    
    </div>
  )
}

export default F2