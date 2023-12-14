import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const BrowseRoom = () => {
    const [browseroom, setbrowseroom] = useState([])
    const fetchbrowseroomData = async () => {
        const res = await fetch('http://localhost:5000/room/getall')
        console.log(res.status);
        const data = await res.json()
        console.table(data)
        setbrowseroom(data)

    }
    useEffect(() => {
        fetchbrowseroomData()
    }, [])
    const displaybrowseroom = () => {
        return browseroom.map((browseroom) => {
            return <div className="col-md-3">
                <div className="card">
                    <img className='card-img' src={'http://localhost:5000/' + browseroom.image} alt="" />
                    <div className="card-body">
                        <p>{browseroom.type}</p>
                        <h4>{browseroom.title}</h4>
                        <h3> ₹ {browseroom.rent}</h3>
                        <p>{browseroom.createdat}</p>
                        <p>{browseroom.email}</p>
                        <Link to={'/view/' + browseroom._id} className='btn btn-danger mt-3'>View More</Link>
                    </div>
                </div>
            </div>
        })
    }
    return (

        <motion.div 
        initial={{opacity:0, scale:0.2, x:'100%'}}
       animate={{opacity:1, scale:1, x:0}}
       transition={{duration:0.5, type:'spring', damping:15, stiffness:100}}
        className="vh-100 class1" >
            <h1 className='text-center  py-5' style={{ color: '#060666e0' }}>Browse Your Room Here</h1>
            <div className="container">
                <div className="row">
                    {displaybrowseroom()}
                </div>
            </div>

        </motion.div>

    )
}

export default BrowseRoom