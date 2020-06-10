import React, { useState, useEffect } from 'react';
import { StyledTimer } from './styles';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <StyledTimer className='time'>{seconds}s</StyledTimer>
    </>
  );
};

export default Timer;
