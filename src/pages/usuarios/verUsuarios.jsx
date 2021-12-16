import { useQuery } from '@apollo/client'
import { getUsuarios } from 'graphql/usuario/querys'
import { useEffect } from 'react';
import PrivateRoute from 'context/PrivateRoute';
import * as React from 'react';
import { Link } from 'react-router-dom';









const VerUsuarios = () => {
    const { data, loading, error } = useQuery(getUsuarios);
    useEffect(() => { console.log("los datos son ", data) }, [data])

    console.log("el errores ",error,loading)

 



    return (
        <div className="contenedor ">
            <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                <PrivateRoute roleList={"ADMINISTRADOR"}>
                    <div>
                        <div className="contenedor flex flex-col">
                            <h1 className="text-4xl mb-20">Listado De Usuarios :</h1>
                            <form action="">
                                <table >
                                    <tr>
                                        <th className="fondoCampo">Nombre</th>
                                        <th className="fondoCampo">Apellido</th>
                                        <th className="fondoCampo">Correo</th>
                                        <th className="fondoCampo">Identificacion</th>
                                        <th className="fondoCampo">Rol</th>
                                        <th className="fondoCampo">Estado</th>
                                        <th className="fondoCampo">Acciones</th>
                                    </tr>
                                    {data && data.Usuarios.map((u) => {
                                        return (
                                            <tr key={u._id}>

                                                <td >{u.nombre}</td>
                                                <td>{u.apellido}</td>
                                                <td>{u.correo}</td>
                                                <td>{u.identificacion}</td>
                                                <td>{u.rol}</td>
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

export default VerUsuarios
