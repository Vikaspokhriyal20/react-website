import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FechingData = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [changeid, setChangeid] = useState(1)


    const handleclick = () => {
        setChangeid(id)
    }


    // feching data from api using useEffect-Hook

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${changeid}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            }).catch(err => {
                console.log(err)
            })


    }, [changeid])



    return (
        <>
            <div className="container p-5 bg-light text-center ">
                <p><strong>fetching data from api</strong></p>
                <input type="text" value={id} onChange={e => setId(e.target.value)} className='form-control w-25 m-auto' />
                <button className='btn-2 mt-3' onClick={handleclick}>Fetch Post</button>

                {/* display the props value */}
                <p className='mt-4 fs-5'><strong>{post.username}</strong></p>
                <p className='mt-4 fs-5'><strong>{post.email}</strong></p>
            </div>

        </>


    )
}

export default FechingData
