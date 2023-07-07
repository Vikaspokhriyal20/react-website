import React, { useEffect, useState } from 'react'

const CounterApp = () => {


  const [count, setCount] = useState(0);

//add value  
  const increment = () => {
    setCount(count + 1);

  }

// dcrement the count value when value is more then 0
  const dcrement = () => {
    if (count === 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }


  return (
    <>
      <div className='container py-5 text-center bg-primary'>
        <h2><kbd>{count}</kbd></h2>
        <button onClick={increment} className='btn-1 '>increment +</button>
        <button onClick={dcrement} className='btn-2'>dcrement -</button>
      </div>
    </>
  )
}

export default CounterApp
