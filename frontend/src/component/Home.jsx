import React from 'react'

const Home = () => {
  return (
    <div >
     
     <div  id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active slide1">
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
<div className="container">
  <h1 className='text-center my-4' style={{fontSize:'50px' , color:'#060666e0'}}>WHY BOOK WITH US </h1>
  <div className="row">

    <div className="col-md-3 shadow">
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
 
  
  <div class="card-body " style={{backgroundColor:'brown' , color:'white'}}>
    <h2 class="card-title">All Activity</h2>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit similique ad officiis, excepturi soluta.</p>
    <a href="#" class="btn btn-primary " style={{fontSize:'20px'}}>View More</a>
    <div className='mt-4'>
    <img src="icons.png" alt="" height={40} /></div>
  </div>
  
  
</div>
    </div>
  )
}

export default Home