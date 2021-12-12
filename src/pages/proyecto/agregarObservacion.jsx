import { useMutation, useQuery } from '@apollo/client';
import { observacion1 } from 'graphql/proyecto/querys';
import { agregarObservacion1 } from 'graphql/proyecto/querys';
import useFormData from 'hooks/useFormData';
import React from 'react'
import { useParams } from 'react-router';
import PrivateRoute from 'context/PrivateRoute';


const AgregarObservacion = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const { data, loading, error } = useQuery(agregarObservacion1, {
        variables: { id: _id }
    })

    const [a, { data1, loading1, error1 }] = useMutation(observacion1)



    if (loading) {
        return <div>Loading........................</div>
    }

    console.log("los datos son ", data)


    const submitForm = (e) => {
        e.preventDefault();
        a({
            variables: { id: _id, observacion: formData.observacion2 }
        })
        console.log("la nueva ob es", formData)

    }

    return (
        <div>

            <PrivateRoute roleList={"ADMINISTRADOR"}>
                <div className="contenedor ">

                    <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                        <form onSubmit={submitForm} ref={form} onChange={updateFormData} action="" >


                            <div className="w-72 h-20 imagen m-auto" ></div>
                            <h1 className="text-4xl mt-10 mb-10 text-center">Observacion </h1>


                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="nombre">Observacion :</label>
                                    <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Nombre :" name="observacion2" />
                                </div>
                            </div>



                            <div className="flex flex-row">
                                <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Actualizar Observacion" />
                            </div>


                        </form>

                    </div>
                </div>
            </PrivateRoute>

            <PrivateRoute roleList={"LIDER"}>
                <div className="contenedor ">

                    <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                        <form onSubmit={submitForm} ref={form} onChange={updateFormData} action="" >


                            <div className="w-72 h-20 imagen m-auto" ></div>
                            <h1 className="text-4xl mt-10 mb-10 text-center">Mi Perfil</h1>


                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="nombre">Observacion :</label>
                                    <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Nombre :" name="observacion2" />
                                </div>
                            </div>



                            <div className="flex flex-row">
                                <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Actualizar Observacion" />
                            </div>


                        </form>

                    </div>
                </div>
            </PrivateRoute>
        </div>
    )
}

export default AgregarObservacion
