import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // get the width of window
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const [tick, setTick] = useState(0);

    // const CurrentWidth = () => {
    //     setWidthCount(() => window.innerWidth);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', CurrentWidth);

    //     //cleanup function
    //     return () => {
    //         window.removeEventListener('resize', CurrentWidth);
    //     }
    // })

    // Timer in using use effect

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTimer(timer + 1);
    //     }, 1000);
    // }, [timer])
    
    // useEffect(() => {
    //     document.title = `${timer}`
    // })

    const myTimer = () => {
        setTick(prevtick => prevtick + 1);
    }

    useEffect(() => {
        const interval = setInterval(myTimer, 1000)
        
        return () => {
            clearInterval(interval)
        }
    },[])


    return (
        <>
            <div className="container p-5 text-center bg-dark text-white">
                <h3>The size of the window is {widthCount}</h3>
            </div>
            <div className="container p-5 text-center bg-success text-white">
                <h3>Your time is start - {tick}</h3>
            </div>
        </>
    )
}

export default UseEffect
