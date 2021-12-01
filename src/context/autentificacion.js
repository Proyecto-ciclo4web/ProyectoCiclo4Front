import { createContext, useContext } from 'react';

export const AuContext = createContext(null);

export const useAuth = () => {
  return useContext(AuContext);
};
