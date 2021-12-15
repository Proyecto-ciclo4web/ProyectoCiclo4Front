import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFormData from 'hooks/useFormData'
import { useMutation } from '@apollo/client';
import { Login1 } from 'graphql/autentificacion/mutations';
import { useAuth } from 'context/autentificacion';
import { useNavigate } from 'react-router';



const Login = () => {

    const navigate = useNavigate();
    const {setToken} = useAuth();
    const { form, formData, updateFormData } = useFormData(null);
    const [login,{data,error,loading}]= useMutation(Login1);
    const subtmitForm = (e) =>{
        e.preventDefault();
        login({variables:formData});
    }

    useEffect(()=>{
        if(data){
          if(data.login.token){
              console.log(data.login.token)
              setToken(data.login.token)
              navigate("/");
          }
        }
      },[data])

    return (
        <div className="contenedor "> 
        
            <form onChange={updateFormData} ref={form} onSubmit={subtmitForm}     action="" className="bg-white  flex flex-col pr-10 pl-10 sombra">


            <div className="w-72 h-20 imagen m-auto" ></div>
                <h1 className="text-4xl mt-10 mb-10">Iniciar sesión</h1>

               
                  <input name="correo" className="w-80 campo mb-5" type="email" placeholder="Correo"/>
             

                  <input  name="password" className="w-80 campo mb-10" type="password" placeholder="Contraseña"/>
           

                <input  className="campo boton cursor-pointer mb-6" type="submit" value="Ingresar" />

                <Link to="/Registro">
                <input   className="campo w-80  boton cursor-pointer mb-10" type="button" value="Registrar" />
                </Link>

            </form>



        </div>
    )
}

export { Login}
