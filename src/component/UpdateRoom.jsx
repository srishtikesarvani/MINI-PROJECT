import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateRoom = () => {
    const {id} = useParams()
    const fetchroomData = async ()=>{
        const res = await fetch('http://localhost:5000/room/getbyid'+id)
        const data = await res.json()
        console.log(data);
    }
useEffect(() => {
 fetchroomData()

  
}, [ ])

  return (
    <div>
       <h1>{id}</h1> 
    </div>
  )
}

export default UpdateRoom