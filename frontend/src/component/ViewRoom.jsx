import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const {id} = useParams();
const [roomData, setroomData] = useState(null)
const fetchroomData =async () =>{
  const res = await fetch('http://localhost:5000/room/getbyid/'+id)
  console.log(res.status);
  const data = await res.json()
  console.tabel(data);
  setroomData(data)
}
useEffect(() =>{
  fetchroomData();
},[])
const displayroom =() =>{
  if(roomData !== null){
    return ( <div className="card">
      <img className='card-img-top' src={'http://localhost:5000/' + roomData.image} alt="" />
      <div className="card-body">
        <h2>{roomData.title}</h2>
        <h2>{roomData.type}</h2>
        <h2>{roomData.rent}</h2>
        <h2>{roomData.email}</h2>
        <h2>{roomData.createdat}</h2>
       
      </div>
    </div> )
  }
}

const ViewRoom = () => {
  
  return (
    <div className="d-flex align-item-center justify-content-center ">
      {
        <div className="mt-5">
          <div className="row">
            {displayroom()}
          </div>
        </div>
      }
    </div>
        
    
  )
}

export default ViewRoom
