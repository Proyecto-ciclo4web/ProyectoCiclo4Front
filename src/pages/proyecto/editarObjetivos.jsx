import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router'
import { verObjetivos } from 'graphql/proyecto/querys';
import { Link } from 'react-router-dom';




const EditarObjetivos = () => {
    const { _id } = useParams()





    const { data, loading } = useQuery(verObjetivos, {
        variables: { id: _id }
    });


    console.log("los objetivos son ", data)

    if(loading){
        return <div>Loading.........</div>
    }

    return (
        <div>
            <div className="contenedor ">
                <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">

                    <div>
                        <div className="contenedor flex flex-col">
                            <h1 className="text-4xl mb-20">Listado De Objetivos  :</h1>
                            <form action="">
                                <table >
                                    <tr>
                                        <th className="fondoCampo">Tipo </th>
                                        <th className="fondoCampo">Descripcion</th>
                                        <th className="fondoCampo">Objetivos</th>

                                    </tr>
                                    {data && data.Proyecto.objetivos.map((u) => {

                                        return (
                                            <tr key={u._id}>

                                                <td >{u.tipo}</td>

                                                <td>{u.descripcion}</td>
                                                <td>
                                                    <Link to={`/Editar1/${u._id}`}>
                                                        <input className="campo   boton cursor-pointer mb-10" type="button" value="Editar Objetivo" />
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
    )
}

export default EditarObjetivos
