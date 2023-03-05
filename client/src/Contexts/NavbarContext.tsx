import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type IsShown = {
  isShown: boolean;
};

export interface NavbarContextInterface {
  IsShown: IsShown;
  SetIsShown: Dispatch<SetStateAction<IsShown>>;
}

const defaultState = {
  IsShown: {
    isShown: false,
  },
  SetIsShown: (setIsShown: IsShown) => {},
} as NavbarContextInterface;

export const NavbarContext = createContext(defaultState);

type NavbarProviderProps = {
  children: ReactNode;
};

function NavbarProvider({ children }: NavbarProviderProps) {
  const [isShown, setIsShown] = useState<IsShown>({
    isShown: false,
  });

  return (
    <NavbarContext.Provider
      value={{
        IsShown: isShown,
        SetIsShown: setIsShown,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarProvider;
