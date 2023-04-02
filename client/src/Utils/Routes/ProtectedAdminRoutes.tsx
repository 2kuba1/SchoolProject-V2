import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../Context/IsLoggedContext';
import { UserContext } from '../../Context/UserContext';
import useRelog from '../../Hooks/useRelog';

const ProtectedAdminRoutes = () => {
  useRelog();
  const { User } = useContext(UserContext);
  const navigate = useNavigate();

  return User.Role === 'Admin' ? <Outlet /> : <>{navigate(-1)}</>;
};

export default ProtectedAdminRoutes;
