import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';

const ManageRoom = () => {
    const [roomlist, setroomlist] = useState([])
    const fetchroomData = async () => {
      const res = await fetch("http://localhost:5000/room/getall");
      console.log(res.status);
      const data = await res.json();
      console.table(data);
      setroomlist(data);
    };
    useEffect(() => {
      fetchroomData();
    }, []);
  const deleteroom = async (id)=>{
    console.log(id);
    const res = await fetch('http://localhost:5000/room/delete/'+id, {method : 'DELETE'})
    console.log(res.status);
   
    if(res.status === 200){
      fetchroomData()
      toast.success('Deleted room Successfully Be Done')
    }
  }
    return (
      <motion.div
      initial={{opacity:0, scale:0.2, x:'100%'}}
       animate={{opacity:1, scale:1, x:0}}
       transition={{duration:0.5, type:'spring', damping:15, stiffness:100}}
      className="bg-body-secondary class1">
        <div className="container py-5">
          <h1 className="text-center my-4">ManageRoom</h1>
          <table className="table" style={{backgroundColor:'#ffffff91'}}>
            <thead>
              <tr>
                <th>S. no. </th>
                <th>ID </th>
                <th>Title</th>
                <th>Type</th>
                <th>Rent</th>
                
                <th>Contact</th>
                <th>CreatedAt</th>
               
                <th colSpan={2} className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {roomlist.map((room, index) =>(
                <tr key={room._id}>
                  <td>{index + 1}</td>
                  <td>{room._id}</td>
                  <td>{room.title}</td>
                  <td>{room.type}</td>
                  <td>{room.rent}</td>
                  
                  <td>{room.contact}</td>
                  <td>{room.createdat}</td>
                  <td>
                      <Link to ={'/updateRoom/'+room._id} className="btn btn-primary">Edit</Link>
                  </td>
                  <td>
                      <button className="btn btn-danger" onClick={()=>{deleteroom(room._id)}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    );
}

export default ManageRoom