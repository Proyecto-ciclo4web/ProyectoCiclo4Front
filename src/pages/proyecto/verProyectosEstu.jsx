import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';

import { buscarProyectos } from 'graphql/proyecto/querys'

import React from 'react'

const VerProyectosEstu = () => {

    const { data} = useQuery(buscarProyectos);


    console.log("los datos son", data)
    return (
        <div>
          <div>

        <div className="contenedor ">
            <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">


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
                                <th className="fondoCampo">Avances</th>
                                <th className="fondoCampo">Inscripción</th>

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
                                        <td>
                                            <Link to={`/VerObjetivos/${u._id}`}>
                                                <input className="campo   boton cursor-pointer mb-10" type="button" value="Objetivos" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/verAvances/${u._id}`}>
                                                <input className="campo   boton cursor-pointer mb-10" type="button" value="Avances" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/Inscripcion/${u._id}`}>
                                                <input className="campo   boton cursor-pointer mb-10" type="button" value="Inscribirme" />
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

   


    </div>



</div>


</div>
        </div>
    )
}

export default VerProyectosEstu
