import { useState } from 'react'
import './App.css'
import Contact from './component/ContactUs'

export default function App() {
  function handleClick(){
    alert("Button Clicked");
  }
  function handleHover(){
    alert("I have been Touched");
  }
  function handleInputChange(e){
    console.log("vvalue till now",e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submitted");
  }
  return (
    <>
    <div className="bg-purple-500 px-10 py-5 mb-8 rounded-x1 text-center flex justify-center items-center"
    >

    <div className="bg-green-500 justify-center px-10 py-5 mb-8 rounded-x1 items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <button className="rounded-x1 text-center font-bold text-red-500 bg-yellow-500" onClick={handleClick}> click me! </button>
      <p onMouseOver={handleHover} className="bg-black text-white-500 font-bold  ">Hover me!</p>
      <input type="text" onChange={handleInputChange} className="bg-white text-red-500 rounded-xl text-center " placeholder="write here"></input>
      <button type="submit" className="bg-blue-500 text-white rounded-x1 px-5 py-2 font-bold">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}


