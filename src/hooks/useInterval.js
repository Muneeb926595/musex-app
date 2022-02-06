import {useRef, useEffect} from 'react';
const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  let intervalId;
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);

  const clearTimer = () => clearInterval(intervalId);

  return [clearTimer];
};

export default useInterval;
