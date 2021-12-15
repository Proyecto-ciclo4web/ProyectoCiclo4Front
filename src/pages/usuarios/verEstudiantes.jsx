import { useQuery } from '@apollo/client';
import PrivateRoute from 'context/PrivateRoute';
import { Estudiantes } from 'graphql/usuario/querys';
import { Link } from 'react-router-dom';
import React from 'react'



const VerEstudiantes = () => {



    const { data, loading, error } = useQuery(Estudiantes)

    console.log("los estudiantes son , : ", data)

    return (
        <div className="contenedor ">
            <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                <PrivateRoute roleList={"LIDER"} >
                    <div>
                        <div className="contenedor flex flex-col">
                            <h1 className="text-4xl mb-20">Listado De Estudiantes  :</h1>
                            <form action="">
                                <table >
                                    <tr>

                                        <th className="fondoCampo">Nombre</th>
                                        <th className="fondoCampo">Apellido</th>
                                        <th className="fondoCampo">Correo</th>
                                        <th className="fondoCampo">Identificacion</th>
                                        <th className="fondoCampo">Estado</th>
                                        <th className="fondoCampo">Acciones</th>


                                    </tr>
                                    {data && data.Estudiantes.map((u) => {
                                        return (
                                            <tr key={u._id}>

                                                <td >{u.nombre}</td>
                                                <td>{u.apellido}</td>
                                                <td>{u.correo}</td>
                                                <td>{u.identificacion}</td>
                                                <td>{u.estado}</td>

                                    
                                                <td>
                                                    <Link to={`/editarEstado/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Actualizar Estado" />
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
                <PrivateRoute roleList={"ADMINISTRADOR"} >
                    <div>
                        <div className="contenedor flex flex-col">
                            <h1 className="text-4xl mb-20">Listado De Estudiantes  :</h1>
                            <form action="">
                                <table >
                                    <tr>

                                        <th className="fondoCampo">Nombre</th>
                                        <th className="fondoCampo">Apellido</th>
                                        <th className="fondoCampo">Correo</th>
                                        <th className="fondoCampo">Identificacion</th>
                                        <th className="fondoCampo">Estado</th>
                                        <th className="fondoCampo">Acciones</th>


                                    </tr>
                                    {data && data.Estudiantes.map((u) => {
                                        return (
                                            <tr key={u._id}>

                                                <td >{u.nombre}</td>
                                                <td>{u.apellido}</td>
                                                <td>{u.correo}</td>
                                                <td>{u.identificacion}</td>
                                                <td>{u.estado}</td>

                                    
                                                <td>
                                                    <Link to={`/editarEstado/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Actualizar Estado" />
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


    )
}

export default VerEstudiantes
