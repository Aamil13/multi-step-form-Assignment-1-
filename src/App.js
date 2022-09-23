import F1 from "./Component/F1";
import "./app.scss"
import { useState, useContext } from "react";
import F2 from "./Component/F2";
import F3 from "./Component/F3";
import {ContextProvider} from "./DataContext.js"
import Context from "./DataContext.js";
import { Stepper, Step } from 'react-form-stepper';
import F4 from "./Component/F4";

function App() {
 
  const {step, setStep} = useContext(Context)
  // console.log(step)

  return (
    <div className="App">
      <div className="bg-secondary shadow w-100 d-flex justify-content-between px-5">
    <h1 className="fw-light text-light">Stepper Form</h1>
    <h3 className="fw-light text-warning pt-2">steps {step} of 4</h3>
      </div>
      <progress className="w-100 cProg" max='100' value={25 * step} />
{step === 1 ?
      <div className="holder center mt-5 col-md-4 card shadow">
        <F1 />
      </div>

: step === 2 ?
      <div className="holder center mt-5 col-md-4 card shadow">
        <F2 />
      </div>

: step === 3 ?
      <div className="holder center mt-5 col-md-4 card shadow">
        <F3 />
      </div>
: step === 4 ?
        <div className="holder center mt-5 col-md-4 card shadow">
        <F4 />
        </div>
 : null }     
    </div>
  );
}

export default App;
