
import './App.css';
import Home from './layout/Home';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Quizz from './pages/Quizz';
import Thanks from './pages/Thanks';
import data from "./data.json"
import Error from './pages/Error';
import { useState } from 'react';



function App() {


  return (
    <div className="App"  data-theme="cupcake">

      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/quizz" element ={<Quizz data={data} />} />
        <Route path = "/thanks" element ={<Thanks />} />
        <Route path = "/*" element ={<Error/>} />


      </Routes>


      <Footer/>
  
    </div>
  );
}

export default App;
