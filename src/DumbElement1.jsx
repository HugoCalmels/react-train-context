import react, { useContext } from 'react';
import { DumbContext } from './Helper/Context';
const DumbElement1 = () => {

  // works similar to useState
  const {color, setColor} = useContext(DumbContext)

  return (

    <div
      className="dumb-elem1"
      style={{ background: color }}
    >
      <h2>IM THE FIRST DUMB ELEMNT</h2>
    
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo quasi iste architecto dolor facilis nemo sunt iusto deleniti excepturi, distinctio, culpa neque, dicta a!</p>
      </div>

  )
}

export default DumbElement1