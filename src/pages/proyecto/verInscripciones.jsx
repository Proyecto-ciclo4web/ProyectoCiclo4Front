import { useQuery } from '@apollo/client';
import PrivateRoute from 'context/PrivateRoute';
import { verInscripciones } from 'graphql/proyecto/querys';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const VerInscripciones = () => {





    const { _id } = useParams();

    const { data, loading, error } = useQuery(verInscripciones, {
        variables: { proyecto: _id }
    });

    console.log("los datos son", data)




    return (
        <div>

            <div className="contenedor ">
                <div>

                    <div className="contenedor ">
                        <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">

                            <PrivateRoute roleList={"ADMINISTRADOR"}>
                                <div>
                                    <div className="contenedor flex flex-col">
                                        <h1 className="text-4xl mb-20">Listado De Inscripciones :</h1>
                                        <form action="">
                                            <table >
                                                <tr>
                                                    <th className="fondoCampo">Nombre Estudiante </th>
                                                    <th className="fondoCampo">Documento Estudiante  </th>
                                                    <th className="fondoCampo">Estado Estudiante En Proyecto</th>
                                                    <th className="fondoCampo">Nombre Proyecto</th>
                          
                        

                                                </tr>
                                                {data && data.Inscripcion.map((u) => {
                                                    return (
                                                        <tr key={u._id}>
                                                            <td>{u.estudiante.nombre}</td>
                                                            <td>{u.estudiante.identificacion}</td>
                                                            <td>{u.estado}</td>
                                                            <td>{u.proyecto.nombre}</td>

                                                            {/* <td>{u.proyecto.nombre}</td>
                                                            <td>{u.estado}</td>
                                                            <td>{u.lider.nombre}</td> */}

                                                       


                                                        </tr>
                                                    );


                                                })
                                                }

                                            </table>
                                        </form>

                                        <div>

                                        </div>

                                    </div>
                                </div>

                            </PrivateRoute>


                        </div>



                    </div>


                </div>



            </div >

        </div >
    )
}

export default VerInscripciones
