import { useQuery } from '@apollo/client';
import PrivateRoute from 'context/PrivateRoute';
import { verObjetivos } from 'graphql/proyecto/querys';
import React from 'react'
import { useParams } from 'react-router';
	

const VerObjetivos = () => {


    const { _id } = useParams()



    const { data, loading, error } = useQuery(verObjetivos, {
        variables: { id: _id }
    });


if(loading){
    return <div>Cargando</div>
}
    console.log("los objetivos son, ",)


    return (
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
                                    
                                    </tr>
                                    {data && data.Proyecto.objetivos.map((u) => {
                                        return (
                                            <tr key={u._id}>

                                                 <td >{u.tipo}</td>
                                                <td>{u.descripcion}</td> 
                                        

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
    )
}

export default VerObjetivos
