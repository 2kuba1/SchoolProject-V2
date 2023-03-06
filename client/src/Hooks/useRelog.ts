import { useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { User, UserContext } from '../Contexts/UserContext';
import { IsLoggedContext } from '../Contexts/IsLoggedContext';

const useRelog = () => {
  const { User, SetUser } = useContext(UserContext);
  const { SetIsLogged } = useContext(IsLoggedContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<User>(token);
      const date = new Date();
      console.log(decoded);
      if (date.getMilliseconds() < date.getMilliseconds() + decoded.exp) {
        if (
          (User.Email && User.FirstName && User.Id && User.Role != '') ||
          null
        )
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
      } else {
        SetIsLogged({
          isLogged: false,
        });
      }
    }
  }, []);
};

export default useRelog;
