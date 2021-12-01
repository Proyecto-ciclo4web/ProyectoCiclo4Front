import React, { useEffect, useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';
import { setContext } from '@apollo/client/link/context';
import 'styles/globals.css';
import jwt_decode from "jwt-decode";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from "@apollo/client";
import VerUsuarios from 'pages/usuarios/verUsuarios';
import Registro from 'pages/registro';
import { Login } from 'pages/login';
import { AuContext } from 'context/autentificacion';
import PrivateComponent from 'context/PrivateRoute';
import MiPerfil from 'pages/miPerfil';
import EditarEstado from 'pages/usuarios/EditarEstado';
import VerProyectos from 'pages/proyecto/verProyectos';
import VerInscripciones from 'pages/proyecto/verInscripciones';
import VerAvances from 'pages/proyecto/verAvances';
import EditarEstadoProyecto from 'pages/proyecto/editarEstadoProyecto';
import EditarFaseProyecto from 'pages/proyecto/editarFaseProyecto';






const httpLink = createHttpLink({
  uri:'http://localhost:4855/graphql'
})

// una funcion la cual envia el token en el header cuando hacemos una peticion
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link:authLink.concat(httpLink),
  cache: new InMemoryCache()
}) 
 
function App() {
  const [userData, setUserData] = useState({});
  const [auToken,setAuToken]=useState('');
  const setToken=(token)=>{
    setAuToken(token)
    if(token){
      localStorage.setItem('token',JSON.stringify(token))
    }else{
      localStorage.removeItem('token')
    }
  }

  useEffect(()=>{
  
    if(auToken){
      const decoded = jwt_decode(auToken);
      setUserData({
        _id:decoded._id,
        nombre:decoded.nombre,
        apellido:decoded.apellido,
        identificacion:decoded.identificacion,
        correo:decoded.correo,
        estado:decoded.estado,
        rol:decoded.rol,

      })

    }



  },[auToken]);



  return (

   <AuContext.Provider value={{auToken,setAuToken,setToken}}>
          <UserContext.Provider value={{ userData, setUserData }}>

      <ApolloProvider client={client}>
          <BrowserRouter>


            <Routes>
              <Route path='/' element={<PrivateLayout />}>
                
                <Route path='' element={<Index />} />

                <Route path='/perfil' element={<MiPerfil />} />

                <Route path='/verusuarios' element={<VerUsuarios />} />

                <Route path='/editarEstado/:_id' element={<EditarEstado />} />

                
                <Route path='/verProyectos' element={<VerProyectos />} />


                <Route path='/verInscripciones/:_id' element={<VerInscripciones />} />

                <Route path='/verAvances/:_id' element={<VerAvances />} />

                <Route path='/editarEstadoProyecto/:_id' element={<EditarEstadoProyecto />} />


                <Route path='/editarFaseProyecto/:_id' element={<EditarFaseProyecto />} />

                



              </Route>


              <Route path='/registro' element={<Registro />} />
              <Route path='/login' element={<Login />} />


            </Routes>
          </BrowserRouter>
        </ApolloProvider>
        </UserContext.Provider>

      </AuContext.Provider>
      

  );



}

export default App;
