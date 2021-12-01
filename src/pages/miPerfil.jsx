import { useMutation } from '@apollo/client';
import { useAuth } from 'context/autentificacion';
import { UserContext } from 'context/userContext';
import { useUser } from 'context/userContext';
import { EditarUsuario } from 'graphql/usuario/mutations';
import useFormData from 'hooks/useFormData';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';







const MiPerfil = () => {

    const navigate = useNavigate();

    const { userData, setUserData } = useUser();

    const { form, formData, updateFormData } = useFormData(null);

    const [idEdit, setIdEdit] = useState(userData._id);

    const { setToken } = useAuth();


    const [editarUsuario, { data, loading, error }] = useMutation(EditarUsuario, {

        variables: { _id: idEdit },
    });




    const submitForm = (e) => {
        e.preventDefault();
        console.log("los datos recojidos son", formData)

        editarUsuario({
            variables: { _id: idEdit, ...formData }

        })


        setToken(null);
        navigate("/login")

    }


    return (
        <div>


            <div className="contenedor ">

                <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                    <form onSubmit={submitForm} ref={form} onChange={updateFormData} action="" >


                        <div className="w-72 h-20 imagen m-auto" ></div>
                        <h1 className="text-4xl mt-10 mb-10 text-center">Mi Perfil</h1>


                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Nombre:
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Nombre :" name="nombre" defaultValue={userData.nombre} />
                            </div>



                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Apellido:
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Apellido :" name="apellido" defaultValue={userData.apellido} />
                            </div>



                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Identificacion:
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Idenficacion :" name="identificacion" defaultValue={userData.identificacion} />
                            </div>



                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Correo :
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Correo :" name="correo" defaultValue={userData.correo} />
                            </div>



                        </div>




                        <div className="flex flex-row">
                            <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Actualizar" />
                        </div>


                    </form>

                    </div>
                    </div>
                </div>
                )
}

                export default MiPerfil
