import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ViewRoom = () => {
  const { id } = useParams();
  const [roomData, setroomData] = useState(null)
  const fetchroomData = async () => {
    const res = await fetch('http://localhost:5000/room/getbyid/' + id)
    console.log(res.status);
    const data = await res.json()
    console.table(data);
    setroomData(data)
  }
  useEffect(() => {
    fetchroomData();
  }, [])
  const displayroom = () => {
    if (roomData !== null) {
      return (<div className="card border-0 w-100">
        <div className="row">
          <div className="col-md-4">
            <img className='w-100' style={{ border: '1px solid transparent', borderRadius: '10px' }} src={'http://localhost:5000/' + roomData.image} alt="" />
          </div>
          <div className="col-md-8" >
            <div className="card-body">
              <h2>{roomData.title}</h2>
              <h2>{roomData.type}</h2>
              <h2>{roomData.rent}</h2>
              <h2>{roomData.email}</h2>
              <h2>{roomData.createdat}</h2>

            </div>
          </div>
        </div>
      </div>)
    }
  }


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
