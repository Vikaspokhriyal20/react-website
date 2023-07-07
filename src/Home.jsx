import React, { useState, useEffect } from 'react'


const Home = (props) => {

  const [myjob, setMyjob] = useState(false);

  let message;
  if (myjob) {
    message = <p>PROGRAMER AND DEVELOPER 🤹‍♀️🤹‍♀️</p>;
  }
 
  return (
    <>
      <header className='container mt-4 p-5 '>
        <div className="row">
          <div className="col-lg-6 col-md-12 align-self-center hero">
            <p><strong> THIS IS ME 👉</strong></p>
            <h1>VIKAS POKHRIYAL</h1>
              <strong>{message}</strong>
              <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto assumenda voluptatem ut, vitae soluta doloribus veritatis excepturi molestiae quo sunt mollitia impedit eaque. Omnis doloribus earum fugiat dolorum dicta.</strong></p>
            <button className='hire-btn' onClick={()=>setMyjob(!myjob)}>HIRE ME</button>
          </div>
          <div className="col-lg-6 col-md-12 align-self-center mt-4">
            <img src="../public/images/about2.jpg" alt="img" className='img-fluid hero-img m-auto' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
