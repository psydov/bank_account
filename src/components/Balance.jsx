import React, { useEffect, useState } from 'react'
import { store } from '../redux/store'

const Balance = ({ quote }) => {
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setForceUpdate(prev => !prev);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className='text-center text-uppercase'>
        <h1>Iron Bank of Braavos</h1>
        <h2>{quote}</h2>
        <h3>Balance = {store.getState().balance}</h3>
    </div>
  )
}

export default Balance