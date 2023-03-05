import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export type User = {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Role: string;
  exp: number;
};

export interface UserContextInterface {
  User: User;
  SetUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  User: {
    Email: '',
    exp: 0,
    FirstName: '',
    Id: '',
    LastName: '',
    Role: '',
  },
  SetUser: (setUser: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    Email: '',
    exp: 0,
    FirstName: '',
    Id: '',
    LastName: '',
    Role: '',
  });

  return (
    <UserContext.Provider
      value={{
        User: user,
        SetUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
