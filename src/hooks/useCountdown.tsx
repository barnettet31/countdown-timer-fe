import { useEffect, useState } from 'react';

const useCountdown = (targetDate:Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(prevCountDown => prevCountDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);  // Empty array means the effect runs only on mount and unmount

  return getReturnValues(countDown);
};

const getReturnValues = (countDown:number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString().padStart(2, '0');
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000).toString().padStart(2, '0');

  return [days, hours, minutes, seconds];
};

export { useCountdown };
