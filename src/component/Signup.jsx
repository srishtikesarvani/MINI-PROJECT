import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
    const signupForm = useFormik({
        initialValues:{
            name :'',
            email :'',
            password :'',
            confirm :'' 
        },
        onSubmit: async (values)=>{
          console.table(values);
          const res = await fetch('http://localhost:5000/user/add' , {
            method: 'POST',
            body : JSON.stringify(values),
            headers : {
              'Content-Type' : 'application/json'
            }
    
          });
          console.log(res.status);
          if(res.status === 200){
          Swal.fire({
            icon : 'success',
            title : 'signup successfull',
            text : 'Now login to continue'
          })
          navigate('/login')
        }else{
          Swal.fire({
            icon:'error',
            title : 'Somthing went wrong',
            text : 'Please try again'
          })
        }
      },
         
    })
    const uploadFile = async (e) => {
      if(!e.target.files) return;
  
      const file = e.target.files[0];
  
      const fd = new FormData();
      fd.append('myfile', file);
  
      const res = await fetch('http://localhost:5000/util/uploadfile', {
        method: 'POST',
        body: fd
      });
  
      console.log(res.status);
    }
  return (
    <div className='class1'>
        <div className="container col-md-3 d-flex mx-auto align-items-center vh-100 pt-5">
          <div className="card w-100 shadow bg-light">
          <h3 className='mt-4 mx-3 heading' >Please SignUp Here</h3>
            <div className="card-body">
            <form onSubmit={signupForm.handleSubmit}>

              <label htmlFor="">Name</label>
              <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name}   className='form-control mb-4' />
              <label htmlFor="">Email</label>
              <input type="email"   id='email' onChange={signupForm.handleChange} value={signupForm.values.email}   className='form-control mb-4'/>
              <label htmlFor="">Password</label>
              <input type="password"  id='password' onChange={signupForm.handleChange} value={signupForm.values.password}   className='form-control mb-4'/>
              <label htmlFor="">Confirm Password</label>
              <input type="password"  id='confirm'  onChange={signupForm.handleChange} value={signupForm.values.confirm}   className='form-control mb-4'/>
              <label htmlFor="">Upload Image</label>
              <input type="file" className="form-control mb-5"  />
              <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup