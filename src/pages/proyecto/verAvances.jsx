import { useQuery } from '@apollo/client'
import PrivateRoute from 'context/PrivateRoute';
import { verAvances } from 'graphql/proyecto/querys';
import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PrivateComponent from 'context/PrivateComponent';




const VerAvances = () => {




    const { _id } = useParams();

    const { data, loading, error } = useQuery(verAvances, {
        variables: { idProyecto: _id }

    });


    console.log("los vances son : ", data)


    return (
        <div>
           
            <div className="contenedor ">
                <div>

                    <div className="contenedor ">
                        <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                                <div>
                                    <div className="contenedor flex flex-col">
                                        <h1 className="text-4xl mb-20">Listado De Avances  :</h1>
                                        <form action="">
                                            <table >
                                                <tr>
                                                    <th className="fondoCampo">Creado Por   </th>
                                                    <th className="fondoCampo">Descripcion  </th>
                                                    <th className="fondoCampo">Fecha</th>
                                                    <th className="fondoCampo">Nombre Proyecto</th>
                                                    <th className="fondoCampo">Observacion </th>
                                                    <th className="fondoCampo">Acciones </th>


                                                </tr>
                                                {data && data.filtrarAvance.map((u) => {
                                                    return (
                                                        <tr key={u._id}>
                                                            <td>{u.creadoPor.nombre}</td>
                                                            <td>{u.descripcion}</td>
                                                            <td>{u.fecha}</td>
                                                            <td>{u.proyecto.nombre}</td>
                                                            <td>{u.observacion}</td>
                                                            <PrivateComponent roleList={"ADMINISTRADOR"}>

                                                            <td>
                                                                <Link to={`/AgregarObservacion/${u._id}`}>
                                                                    <input className="campo   boton cursor-pointer mb-10" type="button" value="Agregar Observacion" />
                                                                </Link>
                                                            </td>
                                                            </PrivateComponent>

                                                            <PrivateComponent roleList={"LIDER"}>

                                                            <td>
                                                                <Link to={`/AgregarObservacion/${u._id}`}>
                                                                    <input className="campo   boton cursor-pointer mb-10" type="button" value="Agregar Observacion" />
                                                                </Link>
                                                            </td>
                                                            </PrivateComponent>

                                                            <PrivateComponent roleList={"ESTUDIANTE"}>
                                                            <td>
                                                                <Link to={`/editarAvance/${u._id}`}>
                                                                    <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Avance" />
                                                                </Link>
                                                            </td>
                                                            </PrivateComponent>

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

                


                        </div>



                    </div>


                </div>



            </div >
       

            

        </div >
    )
}

export default VerAvances
