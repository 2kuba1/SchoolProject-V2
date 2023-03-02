import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Contexts/NavbarContext';

const useCloseMenu = () => {
  const { SetIsShown } = useContext(NavbarContext);

  useEffect(() => {
    SetIsShown({ isShown: false });
  }, []);
};

export default useCloseMenu;
