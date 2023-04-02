import { useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { User, UserContext } from '../Context/UserContext';
import { IsLoggedContext } from '../Context/IsLoggedContext';

const useRelog = () => {
  const { User, SetUser } = useContext(UserContext);
  const { SetIsLogged } = useContext(IsLoggedContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<User>(token);
      const date = new Date();
      if (date.getMilliseconds() + decoded.exp > date.getMilliseconds()) {
        SetUser({
          Email: decoded.Email,
          exp: decoded.exp + date.getMilliseconds(),
          FirstName: decoded.FirstName,
          LastName: decoded.LastName,
          Id: decoded.Id,
          Role: decoded.Role,
        });
        SetIsLogged({
          isLogged: true,
        });
      }
    } else {
      SetIsLogged({
        isLogged: false,
      });
    }
  }, []);
};

export default useRelog;
