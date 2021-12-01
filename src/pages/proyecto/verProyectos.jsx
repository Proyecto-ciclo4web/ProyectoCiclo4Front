import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import PrivateRoute from 'context/PrivateRoute'
import { buscarProyectos } from 'graphql/proyecto/querys'
import PrivateLayout from 'layouts/PrivateLayout'
import React from 'react'




const VerProyectos = () => {




     const {data,loading,error} =useQuery(buscarProyectos);


     console.log("los datos son",data)


    return (
        <div>

            <div className="contenedor ">
                <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">

                    <PrivateRoute roleList={"ADMINISTRADOR"}>
                        <div>
                            <div className="contenedor flex flex-col">
                                <h1 className="text-4xl mb-20">Listado De Proyectos :</h1>
                                <form action="">
                                    <table >
                                        <tr>
                                            <th className="fondoCampo">Nombre</th>
                                            <th className="fondoCampo">Presupueso</th>
                                            <th className="fondoCampo">Fecha Inicio</th>
                                            <th className="fondoCampo">Fecha Fin</th>
                                            <th className="fondoCampo">Estado</th>
                                            <th className="fondoCampo">Lider</th>
                                            <th className="fondoCampo">Objetivos</th>
                                            <th className="fondoCampo">Inscripciones</th>
                                            <th className="fondoCampo">Avances</th>
                                            <th className="fondoCampo">Editar</th>
                                        </tr>
                                        {data && data.Proyectos.map((u) => {
                                        return (
                                            <tr key={u._id}>
                                                <td>{u.nombre}</td>
                                                <td>{u.presupuesto}</td>
                                                <td>{u.fechaInicio}</td>
                                                <td>{u.fechaFin}</td>
                                                <td>{u.estado}</td>
                                                <td>{u.lider.nombre}</td>
                                                <td>{u.objetivos[0].descripcion}</td>
                                               
                                              
                                                <td>
                                                <Link to={`/verInscripciones/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Inscripciones" />
                                                    </Link>
                                                </td>
                                                <td>
                                                <Link to={`/verAvances/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Avances" />
                                                    </Link>
                                                </td>

                                                <td className="flex flex-row gap-5">
                                                <Link to={`/editarEstadoProyecto/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Estado" />
                                                    </Link>

                                                    <Link to={`/editarFaseProyecto/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Fase" />
                                                    </Link>
                                                </td>

                                       
                                       
                            
            
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
    )
}

export default VerProyectos
