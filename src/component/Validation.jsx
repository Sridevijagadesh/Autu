

const Validation = (val) => {

  let errors = {}
  const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
  if(val.name ===''){
    errors.name = 'Name should not be empty'
  }else if(val.name.length <3 || val.name.length >30){
    errors.name = 'Name must be B/w 3-30'
  }else{
    errors.name = ''
  }
  if(val.email ===''){
    errors.email = 'email should not be empty'
  }else if(!email_pattern.test(val.email)){
    errors.email = 'email is invalid'
  }else{
    errors.email = ''
  }
  if(val.password ===''){
    errors.password = 'password should not be empty'
  
  }
  else{
    errors.password = ''
  }
  return (
errors
  )
}

export default Validation
