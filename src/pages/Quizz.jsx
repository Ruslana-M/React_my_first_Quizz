import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Quizz({ data }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  function goToNextQ(){
  
    if(data.length -1 === index){
        // data.length === index + 1
    
        navigate("/thanks")
    } else {
       
        setIndex(index + 1)
    }

  }

  
  
  return (
    <div className="h-5/6 flex flex-col items-center justify-evenly">
      <div>
        <h2>JAVA SCRIPT Variables and Operators for Beginners</h2>
        
    
      </div>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <p>{data[index].question}</p>
          <div className="card-actions flex-col items-center">
            {data[index].options.map((option, j) => (
              <button key={j} className="btn" onClick={goToNextQ}>{option}</button>
            ))}
          </div>
        </div>
      </div>
      <Link to={"/thanks"}>
        <button className="btn btn-active btn-primary">
          Go to the next page
        </button>
      </Link>
    </div>
  );
}

export default Quizz;
