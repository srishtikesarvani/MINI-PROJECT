import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';
import UseAppContext from '../AppContext';


const Login = () => {
  const { setloggedin } = UseAppContext()
  const loginForm = useFormik({
    initialValues :{
      email : '',
      password :'',
     
    }, 
    onSubmit: async(values)=>{
      console.table(values);
      const res = await fetch('http://localhost:5000/user/authenticate',{

     method : 'POST',
     //stringify is a static method convert javascript value to json string
     body : JSON.stringify(values),
     header : {
      //content-type is a MIME type that indecate content being send or received is json data
      'Content-type' : 'application/json'
     }
    
  })
   console.log(res.status);
  if(res.status === 200){
    Swal.fire({
      icon : 'success',
      title : 'Login Success'
    })
     setloggedin(true);
     const data = await res.json()
     sessionStorage.setItem('user', JSON.stringify(data))
   
}else if(res.status === 400)
  {
    Swal.fire({
  icon : 'error',
  title : 'Login Failed', 
  text : 'Invalid email or password'
})
  }
  
}})
  
  return (
    <div className='class1'>
      <div className='col-md-4 d-flex mx-auto align-items-center vh-100 '>
        <div className="card w-100 shadow bg-light">
        <h3 className='mt-4 mx-3 heading' >Login Form</h3>
          <div className="card-body">
          <form onSubmit={loginForm.handleSubmit}>
            <label htmlFor="" style={{fontSize:'15px' , fontWeight:'500'}}>Email</label>
            <input type="email" id='email'  onChange={loginForm.handleChange} values={loginForm.values.email} className='form-control mb-2'/>
            
            <label htmlFor="" style={{fontSize:'15px' , fontWeight:'500'}}>Password</label>
            <input type="password"  id='password' onChange={loginForm.handleChange} values={loginForm.values.password} className='form-control mb-2'/>
            
            {/* <label htmlFor="" style={{fontSize:'15px' , fontWeight:'500'}}>Confirm Password</label>
            <input type="email"  id='confirmpassword' onChange={loginForm.handleChange} values={loginForm.values.confirmpassword} className='form-control mb-2' /> */}
            <button  type='submit' className='btn btn-primary w-100 my-4 '> Login Here</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login