import { useCallback, useRef, useState } from 'react';

const useFetch = (service) => {
  const serviceRef = useRef(service);
  const [response, setResponse] = useState(null);
  const [fetchedOnce, setFetchedOnce] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchFunc = useCallback((...args) => {
    setFetchedOnce(true);
    setIsFetching(true);
    setError(null);

    const { current: service } = serviceRef;
    return service(...args)
      .then((response) => {
        setResponse(response);
        setIsFetching(false);
        return response;
      })
      .catch((error) => {
        setError(error);
        setIsFetching(false);

        throw new Error(error);
      });
  }, []);

  return [{ response, meta: { fetchedOnce, isFetching, error } }, fetchFunc];
};

export default useFetch;
