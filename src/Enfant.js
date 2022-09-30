import React from 'react';


const Enfant = (props) => {

  return (
    <div className="enfant">
      <h2>ENFANT</h2>
      <button onClick={(e)=> props.myFunction(e)}>toggle theme</button>
    </div>
  )
}

export default Enfant