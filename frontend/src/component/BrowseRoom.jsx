import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BrowseRoom = () => {
    const [browseroom, setbrowseroom] = useState([])
    const fetchbrowseroomData = async () =>{
        const res= await fetch('http://localhost:5000/room/getall')
        console.log(res.status);
        const data = await res.json()
        console.table(data)
        setbrowseroom(data)

 }
 useEffect(() => {
    fetchbrowseroomData()
 },[])
 const displaybrowseroom = () =>{
    return browseroom.map((browseroom)=>  {
        return <div className="col-md-3">
            <div className="card">
                <img className='card-img-top' src={'http://localhost:5000/'+browseroom.image} alt="" />
                <div className="card-body">
                    <h1>{browseroom.title}</h1>
                    <h3>{browseroom.type}</h3>
                    <h3>{browseroom.rent}</h3>
                    <p>{browseroom.createdat}</p>
                    <Link to = {'/veiwroom/'+browseroom._id} className='btn btn-ptimary mt-3'>View More</Link>
                </div>
            </div>


        </div>
    })
 }
  return (
    
<div className="vh-100">
    <h1 className='text-center  py-5' style={{color:'#060666e0'}}>Browse Your Room Here</h1>
    <div className="cantainer">
        <div className="row">
            {displaybrowseroom()}
        </div>
    </div>

</div>
   
  )
}

export default BrowseRoom