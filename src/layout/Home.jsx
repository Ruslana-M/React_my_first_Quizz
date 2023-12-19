import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to our Quiz</h1>
      <p className="py-6">We wish you good luck</p>
     <Link to={"/quizz"}>   <button className="btn btn-primary">Lets Start</button>  </Link>
    </div>
  </div>
</div>


    </div>
  )
}

export default Home