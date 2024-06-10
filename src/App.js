import { useState } from 'react';
import './App.css';
import Default from './Components/Default';
import Input from './Components/Input';

function App() {
  //set consts to show/hide different components
  const [def, setDef] = useState(false);
  const [inp, setInp] = useState(false);

  //2 functions for button click options
  const ChoseOrig = () => {
    setDef(true);
    setInp(false);
  }

  const ChoseInput = () => {
    setInp(true);
    setDef(false);
  }

  return (
    <div className="App">
      <h2> Counter App</h2>
      <br/>
      {/* buttons to launch the 2 different versions of counter */}
      <button onClick={ChoseOrig} id='btn'> Original Version </button> &nbsp;
      <button onClick={ChoseInput} id='btn'>  User Input </button>
      {/* to allow the components to be hidden.
         Add curly brackets and inside call the boolean variables set at the top of the function
         add a question mark and call the component before adding :null at the end */}
      {
        def?<Default />:null
      }
      {
        inp?<Input />:null
      }
      <br />
  
    </div>
  );
}

export default App;
