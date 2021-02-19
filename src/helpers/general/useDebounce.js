import { useRef } from 'react';

export default function useDebounce(callback, delay) {
  const timeoutIdRef = useRef(null);

  return (...args) => {
    const { current: timeoutId } = timeoutIdRef;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
