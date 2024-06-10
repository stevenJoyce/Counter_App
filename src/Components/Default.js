import '../App.css';
import { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Default = () => {
  // variables for the app
  const [counter, setCounter] = useState(0);  
  
  //2 const functions that will add/subtract from the counter by 1
  const increase = () => {
    setCounter(counter + 1);
  }
  
  const decrease = () => {
    setCounter(counter - 1);
  }
  
  return (
    <div className="App">
      <h2> Counter App</h2>
      {/* Show the value of the counter by calling the counter inside curly brackets */}
      {counter}
      <br/>
      {/* 2 buttons that use the 2 const functions */}
      <button onClick={increase} id='inc'> <IoMdAddCircleOutline /> </button> &nbsp;
      <button onClick={decrease} id ='dec'> <GrSubtractCircle /> </button>
      <br />
    </div>
  );
  
}

export default Default;