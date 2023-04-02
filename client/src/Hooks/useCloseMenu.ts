import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const useCloseMenu = () => {
  const { SetIsShown } = useContext(NavbarContext);

  const closeMenu = () => {
    SetIsShown({ isShown: false });
  };
  useEffect(() => {
    closeMenu();
  }, []);

  return { closeMenu };
};

export default useCloseMenu;
