import { useFormik } from 'formik'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import UseAppContext from '../AppContext';

const AddRentableRoom = () => {

  const [selFile, setSelFile] = useState('');
  const { setrentable } = UseAppContext();
  const rentForm = useFormik({
    initialValues:{
      title:'',
      type:'',
      rent:'',
      email:'',
      contact:'',
      image:'',
      createdat:''
    },
    onSubmit: async(values)=>{
      values.image = selFile;
      console.table(values);
      const res = await fetch('http://localhost:5000/room/add',{

     method : 'POST',
     //stringify is a static method convert javascript value to json string
     body : JSON.stringify(values),
     headers : {
      //content-type is a MIME type that indecate content being send or received is json data
      'Content-Type' : 'application/json'
     }
    
  })

  console.log(res.status);
  if(res.status === 200){
    Swal.fire({
      icon : 'success',
     
    })
     setrentable(true);
     const data = await res.json()
     sessionStorage.setItem('user', JSON.stringify(data))
   
}else if(res.status === 400)
  {
    Swal.fire({
  icon : 'error',
  title : 'Try again', 
 
})
  }
  
}});

const uploadFile = async (e) => {
  if(!e.target.files) return;

  const file = e.target.files[0];
  setSelFile(file.name);

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
       <div className="col-md-4 d-flex mx-auto align-items-center vh-100 pt-5 ">
        <div className="card w-100 mt-5 shadow bg-light">
        <h3 className='mt-4 mx-3 heading' style={{fontSize:'22px', fontWeight:700}} > Add Rentable Room Here</h3>
          <div className="card-body">
          <form onSubmit={rentForm.handleSubmit}>
             <label htmlFor="">Title</label>
             <input type="text"  className='form-control mb-2'  id='title'  onChange={rentForm.handleChange} values={rentForm.values.title} />
             <label htmlFor="">Type</label>
             <input type="text"  className='form-control mb-2' id='type'  onChange={rentForm.handleChange} values={rentForm.values.type}/>
             <label htmlFor="">Rent</label>
             <input type="number"  className='form-control mb-2' id='rent'  onChange={rentForm.handleChange} values={rentForm.values.rent}/>
             <label htmlFor="">Email</label>
             <input type="email"  className='form-control mb-2' id='email'  onChange={rentForm.handleChange} values={rentForm.values.email}/>
             <label htmlFor="">Contact</label>
             <input type="Number"  className='form-control mb-2' id='contact'  onChange={rentForm.handleChange} values={rentForm.values.contact}/>
             {/* <label htmlFor="">Image</label>
             <input type="image"  className='form-control mb-2' id='image'  onChange={rentForm.handleChange} values={rentForm.values.image}/> */}
             <label htmlFor="">CreatedAt</label>
             <input type="date"  className='form-control mb-2' id='createdat'  onChange={rentForm.handleChange} values={rentForm.values.createdat}/>
             <label htmlFor="">Upload Image</label>
              <input type="file" className="form-control mb-2" onChange={uploadFile}  />
             <button  type='submit' className='btn btn-primary w-100 my-3'> Submit Here</button>
          </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default AddRentableRoom