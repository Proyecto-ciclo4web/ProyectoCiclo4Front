import { useMutation, useQuery } from '@apollo/client';

import PrivateRoute from 'context/PrivateRoute';

import { aprobarInscripcion } from 'graphql/proyecto/querys';
import { Inscripcion1 } from 'graphql/proyecto/querys';


import {  useParams } from 'react-router';






const ActualizarInscripcion = () => {


    const { _id } = useParams()



    const { data, loading } = useQuery(Inscripcion1, {
        variables: { id: _id }
    })


    console.log("el id es ", _id)
    console.log("los datos son ", data)



    const [modificar] = useMutation(aprobarInscripcion);




    if (loading) {

        return <div>Loading..............................................</div>
    }



    const aprobarinscri = (e) => {

        e.preventDefault();


        console.log("dadad")

        modificar({
            variables: { aprobarInscripcionId: _id }
        }
        )

    }


    return (

        <div>

            <PrivateRoute roleList={"ADMINISTRADOR"}>
                <div className="contenedor ">

                    <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                        <form onSubmit={aprobarinscri} action="" >


                            <div className="w-72 h-20 imagen m-auto" ></div>
                            <h1 className="text-4xl mt-10 mb-10 text-center">Actualizar Estado De La Inscripcion </h1>


                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="nombre"></label>Nombre Del Estudiante :
                                    <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Estudiante  :" defaultValue={data.Inscripcion1.estudiante.nombre} disabled />
                                </div>



                                <div className="flex flex-col">
                                    <label htmlFor="nombre"></label>Nombre del Proyecto :
                                    <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Proyecto  :" defaultValue={data.Inscripcion1.proyecto.nombre} disabled />
                                </div>



                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Estado Del Estudiante Actual del Proyecto :
                                <input className="w-full campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Proyecto  :" defaultValue={data.Inscripcion1.estado} />
                            </div>




                            <div className="flex flex-row">
                                <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Aprobar Inscripcion" />
                            </div>



                        </form>

                    </div>
                </div>
            </PrivateRoute>
            
            <PrivateRoute roleList={"LIDER"}>
                <div className="contenedor ">

                    <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                        <form onSubmit={aprobarinscri} action="" >


                            <div className="w-72 h-20 imagen m-auto" ></div>
                            <h1 className="text-4xl mt-10 mb-10 text-center">Actualizar Estado De La Inscripcion </h1>


                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <label htmlFor="nombre"></label>Nombre Del Estudiante :
                                    <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Estudiante  :" defaultValue={data.Inscripcion1.estudiante.nombre} disabled />
                                </div>



                                <div className="flex flex-col">
                                    <label htmlFor="nombre"></label>Nombre del Proyecto :
                                    <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Proyecto  :" defaultValue={data.Inscripcion1.proyecto.nombre} disabled />
                                </div>



                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Estado Del Estudiante Actual del Proyecto :
                                <input className="w-full campo mb-10 mr-4 bg-yellow-200" type="text" placeholder="Nombre Del Proyecto  :" defaultValue={data.Inscripcion1.estado} />
                            </div>




                            <div className="flex flex-row">
                                <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Aprobar Inscripcion" />
                            </div>



                        </form>

                    </div>
                </div>
            </PrivateRoute>
        </div>

    )
}

export default ActualizarInscripcion
