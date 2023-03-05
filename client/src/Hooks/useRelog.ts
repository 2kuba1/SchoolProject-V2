import { useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { User, UserContext } from '../Contexts/UserContext';

const useRelog = () => {
  const { User, SetUser } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<User>(token);
      const date = new Date();
      if (date.getMilliseconds() < date.getMilliseconds() + decoded.exp) {
        SetUser({
          Email: decoded.Email,
          exp: decoded.exp + date.getMilliseconds(),
          FirstName: decoded.FirstName,
          LastName: decoded.LastName,
          Id: decoded.Id,
          Role: decoded.Role,
        });
      }
    }
  }, []);
};

export default useRelog;
