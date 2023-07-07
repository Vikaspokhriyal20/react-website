import React, { useState } from 'react'

const Condition = () => {
    const [data, setData] = useState(true);

    return (
        <>
            <div className="container p-5  bg-light text-center">
                {
                    data ? <p><kbd>Hello Dear User 😊😊</kbd> </p> : <p><kbd>Welcome Thankyou for join 🎊🎊</kbd></p>
                }

                <button onClick={() => setData(!data)} className='btn-2'>join</button>
                
            </div>
        </>
    )
}

export default Condition

