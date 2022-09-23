import {createContext,useContext,useState} from 'react'

const Context = createContext();


export const ContextProvider = ({children})=> {
    const [error , setError] = useState('')

    const [title , setTitle] = useState('Personel')
    const [firstname , setFirstname] = useState("")
    const [lastname , setLastname] = useState("")
    const [email , setEmail] = useState("")
    const [gender , SetGender] = useState("")
    const [step, setStep] = useState(1)
    
    const [country , setCountry] = useState('')
    const [state , setState] = useState('')
    const [city , setCity] = useState('')
    const [zip , setZip] = useState(0)

    const [debitn , setDebitn] = useState(0)
    const [cvv , setCvv] = useState(0)
    const [month , setMonth] = useState(0)
    const [year , setYear] = useState(new Date().getFullYear())
    const [agree , setAgree] = useState(false)

    return (
            <Context.Provider value={{title,firstname,setFirstname,lastname,setLastname,email,setEmail,gender,SetGender,step,setStep,
            country,setCountry,city,setCity,state,setState,zip,setZip,
            debitn,setDebitn,cvv,setCvv,month,setMonth,year,setYear,agree,setAgree,
            error,setError}} >
                {children}
            </Context.Provider>
    )
}



export default Context