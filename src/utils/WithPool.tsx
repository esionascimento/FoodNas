import { useState, useEffect } from "react";
import { fechtOrderEventPolling } from '../services/FetchFood/merchantOrder';

export const WithPool = () => {
  console.log('count :');
  const Wrapper = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }, [count]);

    if (count === 15) {
      fechtOrderEventPolling();
      setCount(0);
    }
    return true;
  }
  return Wrapper;
};
