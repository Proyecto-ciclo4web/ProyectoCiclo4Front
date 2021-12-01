import Sidebar from 'components/Sidebar';
import { Outlet, useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/autentificacion';
import { useMutation } from '@apollo/client';
import { REFRESH_TOKEN } from 'graphql/autentificacion/mutations';
import PrivateComponent from 'context/PrivateRoute';
import PrivateRoute from 'context/PrivateRoute';
import PrivateEstado from 'context/privateEstado';




const PrivateLayout = () => {

  const navigate = useNavigate();
  const { auToken, setAuToken, setToken } = useAuth();
  const [loadingauth, setloadingauth] = useState(true);
  const [refrescarToken, { data, loading, error }] = useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refrescarToken();
  }, [refrescarToken])
  

  useEffect(() => {
    console.log(data);

    if (data) {
      if (data.RefreshTokenn.token) {
        setToken(data.RefreshTokenn.token)
      } else {
        setToken(null)
        navigate("/login");
      }
      setloadingauth(false);
    }
  }, [data, setToken, loadingauth, navigate])

  useEffect(() => {
    console.log("TOKEN ACTUAL", auToken, loading)
  }, [auToken])


  return (

    <div>
      <PrivateEstado estadoList={"AUTORIZADO"}>

        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
          <Sidebar />
          <div className='flex w-full h-full'>
            <div className='w-full h-full  overflow-y-scroll'>
              <Outlet />
            </div>
          </div>
        </div>

      </PrivateEstado>

      <PrivateEstado estadoList={"PENDIENTE"}>

        <div>HACER PANTALLA DE PENDIENTE</div>
      </PrivateEstado>


       <PrivateEstado estadoList={"NO_AUTORIZADO"}>
        <div>HACER PANTALLA DE NO AUTORIZADO</div>
      </PrivateEstado>

    </div>









  );
};

export default PrivateLayout;
