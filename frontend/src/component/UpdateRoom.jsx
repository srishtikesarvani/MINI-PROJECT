import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateRoom = () => {
  const { id } = useParams()

  const [roomData, setRoomData] = useState(null);
  const [selFile, setSelFile] = useState('');

  const navigate = useNavigate();

  const fetchroomData = async () => {
    const res = await fetch('http://localhost:5000/room/getbyid/' + id)
    const data = await res.json()
    console.log(data);
    setRoomData(data);
  }
  useEffect(() => {
    fetchroomData()
  }, [])

  const submitForm = async (values) => {
    values.image = selFile;
    console.table(values);
    const res = await fetch('http://localhost:5000/room/update/' + roomData._id, {

      method: 'POST',
      //stringify is a static method convert javascript value to json string
      body: JSON.stringify(values),
      headers: {
        //content-type is a MIME type that indecate content being send or received is json data
        'Content-Type': 'application/json'
      }

    })

    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Updated Successfully',
        text: 'Redirecting to Manage Room',
      })
      navigate('/manage');

    } else if (res.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Try again',

      })
    }

  }

  const uploadFile = async (e) => {
    if (!e.target.files) return;

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
    <div>
      <div className="col-md-6 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Update Room Data</h3>
            {roomData !== null ? (
              <Formik initialValues={roomData} onSubmit={submitForm}>
                {(rentForm) => (
                  <form onSubmit={rentForm.handleSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text" className='form-control mb-2' id='title' onChange={rentForm.handleChange} values={rentForm.values.title} />
                    <label htmlFor="">Type</label>
                    <input type="text" className='form-control mb-2' id='type' onChange={rentForm.handleChange} values={rentForm.values.type} />
                    <label htmlFor="">Rent</label>
                    <input type="number" className='form-control mb-2' id='rent' onChange={rentForm.handleChange} values={rentForm.values.rent} />
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control mb-2' id='email' onChange={rentForm.handleChange} values={rentForm.values.email} />
                    <label htmlFor="">Contact</label>
                    <input type="Number" className='form-control mb-2' id='contact' onChange={rentForm.handleChange} values={rentForm.values.contact} />
                    {/* <label htmlFor="">Image</label>
                 <input type="image"  className='form-control mb-2' id='image'  onChange={rentForm.handleChange} values={rentForm.values.image}/> */}
                    <label htmlFor="">Upload Image</label>
                    <input type="file" className="form-control mb-2" onChange={uploadFile} />
                    <button type='submit' className='btn btn-primary w-100 my-3'> Submit Here</button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateRoom