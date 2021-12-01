import { useUser } from 'context/userContext';
import React from 'react';

const PrivateEstado = ({ estadoList, children }) => {
  const { userData } = useUser();

  if (estadoList.startsWith(userData.estado)) {
    return children;
  }

  return <div></div>;
};

export default PrivateEstado;