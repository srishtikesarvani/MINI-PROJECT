import React from 'react'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    initial={{opacity:0, scale:0.2, x:'100%'}}
       animate={{opacity:1, scale:1, x:0}}
       transition={{duration:0.5, type:'spring', damping:15, stiffness:100}}
    >
     
     <div  id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active slide1">
      <div className='text-center' >
       <marquee behavior="" direction="">
      <h2 style={{color:'black', fontWeight:'600', fontSize:45 , marginTop:'200px' }}    > Welcome To Our Luxury Rooms  <br /> <span style={{fontSize:'15px', color:'black' , paddingleft:'70px'}}> Lorem ipsum dolor sit amet consectetur  sit amet consectetur adipisicing elit. Repudiandae, sit?</span> </h2>
      </marquee>
      </div>
    </div>
    <div className="carousel-item slide2">
      
    </div>
    <div className="carousel-item slide3">
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container  ">
  <h1 className='text-center mt-5' style={{fontSize:'50px' , color:'#060666e0'}}> WHY BOOK WITH US </h1>
  <div className="row py-5">

    <div className="col-md-3 shadow ">
       <img src="room4.webp" alt="" height={180} />
       <h6 className='text-center mt-3 ' style={{color: 'crimson' , fontWeight:'500'}}>BEST SERVICES</h6>
       <p className='text-center' style={{color:'#060666e0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos autem odio inventore earum? Tenetur!</p>
    </div>
    <div className="col-md-3 shadow">
       <img src="room2.jpeg" alt="" height={180} />
       <h6 className='text-center mt-3 ' style={{color: 'crimson' , fontWeight:'500'}}>HIGH RATED </h6>
       <p className='text-center' style={{color:'#060666e0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos autem odio inventore earum? Tenetur!</p>
    </div>
    <div className="col-md-3  shadow">
       <img src="room5.jpeg" alt="" height={180} />
       <h6 className='text-center mt-3' style={{color: 'crimson' , fontWeight:'500'}}>BEST FACALITY</h6>
       <p className='text-center' style={{color:'#060666e0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos autem odio inventore earum? Tenetur!</p>
    </div>
    <div className="col-md-3 shadow">
       <img src="room3.jpeg" alt="" height={180} />
       <h6 className='text-center mt-3' style={{color: 'crimson' , fontWeight:'500'}}>ROOM'S QUALITY BEST</h6>
       <p className='text-center' style={{color:'#060666e0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos autem odio inventore earum? Tenetur!</p>
    </div>
  </div>
</div>



<div class="card text-center mt-5">
 
  
  <div class="card-body " style={{backgroundColor:'gray' , color:'white'}}>
    <h2 class="card-title">All Activity</h2>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit similique ad officiis, excepturi soluta.</p>
    <a href="#" class="btn btn-primary " style={{fontSize:'20px'}}>View More</a>
    <div className='mt-4'>
    <img src="icons.png" alt="" height={40} /></div>
  </div>
  
  
</div>
    </motion.div>
  )
}

export default Home