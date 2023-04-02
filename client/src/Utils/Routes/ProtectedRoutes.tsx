import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../Context/IsLoggedContext';
import useRelog from '../../Hooks/useRelog';

const ProtectedRoutes = () => {
  useRelog();
  const navigate = useNavigate();
  const { IsLogged } = useContext(IsLoggedContext);

  return IsLogged.isLogged ? <Outlet /> : <>{navigate(-1)}</>;
};

export default ProtectedRoutes;
