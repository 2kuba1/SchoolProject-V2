import { createContext, useContext, useState, useEffect } from 'react';

interface ContextProviderProps {
  children: JSX.Element;
}

interface ContextType {
  isMobile: boolean;
}

export const IsMobileContext = createContext<ContextType>({
  isMobile: window.innerWidth <= 1200,
});

export function useIsMobile() {
  return useContext(IsMobileContext);
}

export function IsMobileProvider({ children }: ContextProviderProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const onResize = () => {
    setIsMobile(window.innerWidth <= 1200);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
}
