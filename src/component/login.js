import React, { useState } from 'react'
import '../asset/form.css'
import { Link  ,useNavigate} from 'react-router-dom'
import Validation from './Validation'
import Axios from 'axios'
import {toast} from 'react-toastify'


const Login = () => {
const [values , setvalues] = useState({
  
  email:"",
  password:""
})
const navigator = useNavigate()
const[errors , setError] = useState({})
const[   serverErrors,    setServerErrors] = useState([])
const handlEvent = (event)=>{
   setvalues({...values , [event.target.name]: event.target.value})

}
const hadlesubmit = (e)=>{
  e.preventDefault()
  const errs = Validation(values)
  setError(errs)
  if( errs.email==="" && errs.password ===""){
    Axios.post('http://localhost:8081/auth/register', values).then(res=>{
      if(res.data.success){
      toast.success('Account created Successfully',{
        position:"top-right",
        autoClose:5000
      })
      navigator('/login')
    }
    }).catch(err=>{
     if(err.response.data.errors){
      setServerErrors(err.response.data.errors)
     }
    })
  }
}

  return (
    <div className='form-container'>
      <form className='form' onSubmit={hadlesubmit}>
        <h2>Login</h2>
   
        <div className='form-group'>
          <label htmlFor='email'className='form-label'>Email:</label>
          <input type='email' placeholder='enter your email' className='form-control' name='email' onChange={handlEvent}/>
          {errors.email && <span className='error' >{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'className='form-label'>password:</label>
          <input type='password' placeholder='***********' className='form-control' name='password' onChange={handlEvent}/>
          {errors.password && <span className='error' >{errors.password}</span>}
        </div>
        <button className='btn-form'>Register</button>
        {
                serverErrors.length> 0 && (
        serverErrors.map((val , index)=> (
          <p key={index}>{val.msg}</p>
        ))
                )
      }
        <p>Don't have a/c<Link to ='/register' className='link'>Register</Link></p>
      </form>

    </div>
  )
}

export default Login

