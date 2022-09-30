import React, { useContext } from 'react';
import TotoContext from './TotoContext';

const Child = () => {
  const toto = useContext(TotoContext);

  return (
    <p>Hey, how are you {toto.firstName} {toto.lastName}?</p>
  );
};

export default Child;