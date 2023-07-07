import React from 'react'

const Destructure = () => {

    const Car = (props) => {
        return (
            <>
                 <ul>
                    <li>{props.brand}</li>
                 </ul>
            </>
        )
       
       
    }

    return (
        <>
            <Car brand="ford" />
            <Car brand="kia" />
            <Car brand="e-class" />
            <Car brand="mustang" />
            <Car brand="thar" />
            <Car brand="audi"/>
        </>
    )
}

export default Destructure
