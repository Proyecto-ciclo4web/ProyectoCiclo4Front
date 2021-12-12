import React from 'react'
import { inscripcionesEstudiante } from 'graphql/proyecto/querys'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { useUser } from 'context/userContext'
import { Link } from 'react-router-dom'


const ProyectosEstudiante = () => {
    const { userData, setUserData } = useUser();
    const{data, loading, error} = useQuery(inscripcionesEstudiante, {
        variables: {
            estudiante: userData._id
        }
    });
    const { _id } = useParams();
    console.log(data)

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
                              <th className="fondoCampo">Objetivos</th>
                              <th className="fondoCampo">Avances</th>
                              <th className="fondoCampo">Crear avance</th>

                          </tr>
                          {data && data.InscripcionEstudiante.map((u) => {





                              return (
                                  <tr key={u.proyecto._id}>
                                      <td>{u.proyecto.nombre}</td>
                                      <td>{u.proyecto.presupuesto}</td>
                                      <td>{u.proyecto.fechaInicio}</td>
                                      <td>{u.proyecto.fechaFin}</td>
                                      <td>{u.proyecto.estado}</td>
                                      <td>
                                            <Link to={`/VerObjetivos/${u.proyecto._id}`}>
                                                <input className="campo   boton cursor-pointer mb-10" type="button" value="Objetivos" />
                                            </Link>
{/*                                           <Link to={`/VerObjetivosIns/${u.proyecto._id}`}>
                                              <input className="campo   boton cursor-pointer mb-10" type="button" value="Objetivos" />
                                          </Link> */}
                                      </td>
                                      <td>
                                          <Link to={`/verAvances/${u.proyecto._id}`}>
                                              <input className="campo   boton cursor-pointer mb-10" type="button" value="Avances" />
                                          </Link>
                                      </td>
                                      <td>                                         
                                          <Link to={`/crearAvance/${u.proyecto._id}`}>
                                              <input className="campo   boton cursor-pointer mb-10" type="button" value="CrearAvance" />
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

export default ProyectosEstudiante
