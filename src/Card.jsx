import React from 'react'

const Card = () => {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className="card mb-3">
                            <img src="../public/images/about2.jpg" alt="img" className="card-img-top" />
                            <div className="card-body">
                                <h1 className='card-title'>Card title</h1>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam recusandae mollitia ipsam voluptatum? Dolorem ipsam in voluptatibus dolorum asperiores officiis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 text-white">
                            <img src="../public/images/about2.jpg" alt="img" className="card-img-top" />
                            <div className="card-img-overlay">
                                <h1 className='card-title'>Card title</h1>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam recusandae mollitia ipsam voluptatum? Dolorem ipsam in voluptatibus dolorum asperiores officiis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 ">
                            <img src="../public/images/about2.jpg" alt="img" className="card-img-top" />
                            <div className="card-body">
                                <h1 className='card-title'>Card title</h1>
                                <p className='card-text text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam recusandae mollitia ipsam voluptatum? Dolorem ipsam in voluptatibus dolorum asperiores officiis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
