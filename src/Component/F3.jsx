import React from 'react'
import "./f.scss"
import Context from "../DataContext"
import { useContext } from 'react'

const F3 = () => {

    const {debitn,setDebitn,cvv,setCvv,month,setMonth,year,setYear,agree,setAgree,step,setStep,error,setError} = useContext(Context);

    // console.log( );

    const validate = ()=>{
        if(!debitn || !cvv || !month || !year){
            return setError("All feilds are required")
        }else if(debitn.length !== 16){
                return setError(" Card number should be of 16 digit")
        }else if(cvv.length !== 3){
                    return setError(" CVV number should be of 3 digit")
        }else if(month < (new Date().getMonth() + 2 )){
            return setError(" Card expired")
        }else if(year < new Date().getFullYear()  ){
                return setError(" Card expired")
           }   else if(!agree){
            return setError("You must agree with our terms and conditions")
           
        }else{
            setError('')
            setStep(step+1)
        }
    }


  return (
    <div className='caclh p-4' >
        <h1 className='text-center fw-light mb-5'>Payment Details</h1>
    
    <div className='mb-3'>
        <label>Debit/Credit Card Number</label>
        <input type="number" value={debitn} onChange={((e)=>setDebitn(e.target.value))} className='form-control' placeholder='Enter card number'/>
    </div>

    <div className='mb-3'>
        <div className='d-flex justify-content-between'>
            <div>
                <label>CVV</label>
                <input value={cvv} onChange={((e)=>setCvv(e.target.value))} type='number' className='form-control'/>
            </div>
            <div>
                <label>Month</label>
                <select value={month} onChange={((e)=>setMonth(e.target.value))} type='number' className='form-control'>
                    <option></option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((val, i)=>(
                        <option>{val}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Year</label>
                <input value={year} onChange={((e)=>setYear(e.target.value))} type='number' min={new Date().getFullYear()}  className='form-control'/>
            </div>
        </div>

    </div>

    <div className='mb-3'>
        <label>Terms &amp; Conditions</label>
        <div className='d-flex align-items-center'>
            <input type='checkbox' value={agree} onChange={((e)=>setAgree(e.target.checked))} style={{scale:'1.5'}}/>
            <p className='pt-2 mx-3'> I agree with all the terms and conditions.</p>
        </div>
    </div>

   
    {error && <p className='text-danger text-center'>{error}</p>}
    <div className='d-flex justify-content-between mt-5'>
    <button className='btn btn-outline-secondary shadow w-25'onClick={()=>setStep(step-1)}>Prev</button>
    <button className='btn btn-outline-primary shadow w-25'onClick={validate}>Submit</button>
    </div>
    
    </div>
  )
}

export default F3