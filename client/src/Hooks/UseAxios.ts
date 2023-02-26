import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

function useAxios<T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [T | undefined, boolean, string, () => void] {
  const [data, setData] = useState<T>();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (loadOnStart) sendRequest();
    else setIsPending(false);
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = () => {
    setIsPending(true);
    axios(config)
      .then(response => {
        setError('');
        setData(response.data);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsPending(false));
  };
  return [data, isPending, error, request];
}

export default useAxios;
