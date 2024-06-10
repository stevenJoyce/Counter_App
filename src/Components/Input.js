import '../App.css';
import { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Input = () => {
  //variables to be used
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);
  
  //const function to handle form 
  const handleSubmit = (e) => {
    //to stop page from reloading
    e.preventDefault();

    /*if statement to validate input, if the input is validated
      set the userInput to the input variable above */
    if(input === 0){
      alert("Please input a value above 0")
    }
    else{
      setInput(Number(e));
    }    
  }
  // 2 const functions to set counter to add or subtract the userInput value
  const custInc = () => {
    setCounter(counter + Number(input));
  }
  
  const custDec = () => {
    setCounter(counter - Number(input));
  }
  return (
    <div className="App">
      <h2> Custom Input Buttons </h2>
      {/* Show the value of the counter by calling the counter inside curly brackets */}
      {counter}
      {/* form for user input with a number input and 2 buttons 
       that will use the 2 const functions */}
      <form onSubmit={handleSubmit}>
        <label> 
          Set a custom Value: 
          <input type='number' value={input} 
            onChange={(e) => setInput(e.target.value)} />
        </label>
        <br /> <br />
        <button onClick={custInc} id='inc'> <IoMdAddCircleOutline /> </button> &nbsp;
        <button onClick={custDec} id ='dec'> <GrSubtractCircle /> </button>
      </form>    
    </div>
  );

}

export default Input;