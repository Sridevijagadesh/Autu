import React, { useState } from 'react'
import '../asset/form.css'
import { Link } from 'react-router-dom'
import Validation from './Validation'
import Axios from 'axios'
import toast from 'react-toastify'

const Register = () => {
const [values , setvalues] = useState({
  name:"",
  email:"",
  password:""
})
const[errors , setError] = useState({})
const handlEvent = (event)=>{
   setvalues({...values , [event.target.name]: event.target.value})

}
const hadlesubmit = (e)=>{
  e.preventDefault()
  const errs = Validation(values)
  setError(errs)
  if(errors.name === ''&& errors.email==="" && errors.password ===""){
    Axios.post('', values).then(res=>{
      toast.success('Account created Successfully',{
        position:"top-right",
        autoClose:5000
      })
    }).catch(err=>{
      console.log(err)
    })
  }
}

  return (
    <div className='form-container'>
      <form className='form' onSubmit={hadlesubmit}>
        <h2>Create Account</h2>
        <div className='form-group'>
          <label htmlFor='name'className='form-label'>name:</label>
          <input type='text' placeholder='enter your name' className='form-control' name='name' onChange={handlEvent}/>
          {errors.name && <span className='error' >{errors.name}</span>}
        </div>
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
        <p>Already i have a account<Link to ='/login' className='link'>login</Link></p>
      </form>

    </div>
  )
}

export default Register
