import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type IsLogged = {
  isLogged: boolean;
};

export interface IsLoggedContextInterface {
  IsLogged: IsLogged;
  SetIsLogged: Dispatch<SetStateAction<IsLogged>>;
}

const defaultState = {
  IsLogged: {
    isLogged: false,
  },
  SetIsLogged: (setIsLogged: IsLogged) => {},
} as IsLoggedContextInterface;

export const IsLoggedContext = createContext(defaultState);

type IsLoggedProviderProps = {
  children: ReactNode;
};

function IsLoggedProvider({ children }: IsLoggedProviderProps) {
  const [isLogged, setIsLogged] = useState<IsLogged>({
    isLogged: false,
  });

  return (
    <IsLoggedContext.Provider
      value={{
        IsLogged: isLogged,
        SetIsLogged: setIsLogged,
      }}
    >
      {children}
    </IsLoggedContext.Provider>
  );
}

export default IsLoggedProvider;
