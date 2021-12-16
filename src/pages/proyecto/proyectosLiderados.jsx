import { useQuery } from '@apollo/client';
import { proyectosLiderados } from 'graphql/proyecto/querys';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from 'context/userContext';
import PrivateRoute from 'context/PrivateRoute';





const ProyectosLiderados = () => {

    const { userData } = useUser();

    const [idEdit] = useState(userData._id);

    console.log("el id del lider es  ", idEdit)


    const { data} = useQuery(proyectosLiderados, {
        variables: { lider: idEdit }

    });


    console.log("los datos son", data)

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
                                        {data && data.FiltrarProyectosLider.map((u) => {





                                            return (
                                                <tr key={u._id}>
                                                    <td>{u.nombre}</td>
                                                    <td>{u.presupuesto}</td>
                                                    <td>{u.fechaInicio}</td>
                                                    <td>{u.fechaFin}</td>
                                                    <td>{u.estado}</td>
                                                    <td>{u.lider.nombre}</td>
                                                    <td>
                                                        <Link to={`/VerObjetivos/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Objetivos" />
                                                        </Link>
                                                    </td>


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

                                                        <Link to={`/EditarProyecto/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Proyecto" />
                                                        </Link>

                                                        
                                                        <Link to={`/EditarObjetivos/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Objetivos" />
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
                    <PrivateRoute roleList={"LIDER"}>
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
                                        {data && data.FiltrarProyectosLider.map((u) => {





                                            return (
                                                <tr key={u._id}>
                                                    <td>{u.nombre}</td>
                                                    <td>{u.presupuesto}</td>
                                                    <td>{u.fechaInicio}</td>
                                                    <td>{u.fechaFin}</td>
                                                    <td>{u.estado}</td>
                                                    <td>{u.lider.nombre}</td>
                                                    <td>
                                                        <Link to={`/VerObjetivos/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Objetivos" />
                                                        </Link>
                                                    </td>


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

                                                        <Link to={`/EditarProyecto/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Proyecto" />
                                                        </Link>

                                                        
                                                        <Link to={`/EditarObjetivos/${u._id}`}>
                                                            <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Objetivos" />
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

export default ProyectosLiderados
