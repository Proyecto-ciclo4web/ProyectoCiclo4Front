import { createContext, useContext } from 'react';

export const ObjetoContext = createContext(null);

export const useObjeto = () => {
    return useContext(ObjetoContext);
};
