import Sidebar from 'components/Sidebar';
import { Outlet, useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/autentificacion';
import { useMutation } from '@apollo/client';
import { REFRESH_TOKEN } from 'graphql/autentificacion/mutations';

import PrivateEstado from 'context/privateEstado';




const PrivateLayout = () => {

  const navigate = useNavigate();
  const { auToken,  setToken } = useAuth();
  const [loadingauth, setloadingauth] = useState(true);
  const [refrescarToken, { data, loading }] = useMutation(REFRESH_TOKEN);

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
  }, [auToken,loading])


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

        <div>SE ENCUENTRA PENDIENTE POR AUTORIZAR ..... </div>

<Link to='/login'>
<div className="campo   boton cursor-pointer mb-10" >Volver Al Login</div>
</Link>
      </PrivateEstado>


       <PrivateEstado estadoList={"NO_AUTORIZADO"}>
        <div>HACER PANTALLA DE NO AUTORIZADO</div>
      </PrivateEstado>

    </div>









  );
};

export default PrivateLayout;
