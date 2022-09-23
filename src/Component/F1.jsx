import React from 'react'
import "./f.scss"
import Context from "../DataContext"
import { useContext } from 'react'

const F1 = () => {
    

    const {firstname,setFirstname,lastname,setLastname,email,setEmail,gender,SetGender, step, setStep,error,setError} = useContext(Context);

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validate = ()=>{
        if(!firstname || !lastname || !email || !gender){
            return setError("All fields are required")
        }else if(!email.match(mailformat)){
            return setError("Invalid Email Address")
        }else{
            setError('')
            setStep(step+1)
        }
    }

  return (
    <div className='caclh p-4' >
        <h1 className='text-center fw-light mb-5'>Personal Details</h1>
    
    <div className='mb-3'>
        <label>First Name</label>
        <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='form-control' placeholder='Enter your first name'/>
    </div>

    <div className='mb-3'>
        <label>Last Name</label>
        <input value={lastname} onChange={(e)=>setLastname(e.target.value)} className='form-control' placeholder='Enter your last name'/>
    </div>

    <div className='mb-3'>
        <label>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='enter your email address'/>
    </div>

    <div className='mb-3'>
        <label>Gender</label>
        <select value={gender} onChange={(e)=>SetGender(e.target.value)} className='form-control'>
            <option></option>
            <option selected>Male</option>
            <option>Female</option>
        </select>
    </div>
        {error && <p className='text-danger text-center'>{error}</p>}
    <div className='d-flex justify-content-end mt-5'>
    <button className='btn btn-outline-primary shadow w-25' onClick={validate}>Next</button>
    </div>
    
    </div>
  )
}

export default F1