import React from 'react'
import { Link } from 'react-router-dom'


function Thanks({result}) {
  return (
    <div className="h-5/6 flex flex-col items-center justify-evenly">
    <p className='text-5xl text-blue-600'>Thanks  🎉  </p>

    <Link to={"/"}>  <button className="btn btn-secondary m-5">Back to Home</button>  </Link>
   
    </div>
  )
}

export default Thanks