import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TotoContext from './TotoContext';
import Child from './Child';
import Enfant from './Enfant';
import DumbElement1 from './DumbElement1';
import DumbElement2 from './DumbElement2';
import DumbElement3 from './DumbElement3';
import './style.css';
import { DumbContext } from './Helper/Context';

const App = () => {

  const [color, setColor] = useState('lightgray')

  const myFunction = () => {
    if (color === "lightgray")
      setColor("darkgray")
    else if (color === "darkgray")
      setColor("lightgray")
  }
  return (
 
      <div className="app">
      <Enfant myFunction={myFunction} />
      <DumbContext.Provider value={{ color, setColor }}>
        <DumbElement1 />
        <DumbElement2 />
        <DumbElement3 />
      </DumbContext.Provider>
      </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'));