import { useMutation, useQuery } from '@apollo/client';
import { editarProyecto } from 'graphql/proyecto/mutations';

import { Proyecto1 } from 'graphql/proyecto/querys';

import useFormData from 'hooks/useFormData';
import React from 'react'

import { useParams } from 'react-router'







const EditarProyecto = () => {

    const { _id } = useParams();
    
    const { form, formData, updateFormData } = useFormData(null);


    const { data, loading, error } = useQuery(Proyecto1, {
        variables: { id: _id }

    });

    const [edit,{ data1, loading1, error1 }] = useMutation(editarProyecto);
    console.log(data1,error1,loading1)

     console.log(formData,error)

    console.log("los datos son", data)


    if(loading){
        return     <div>Cargando...</div>
   
    }

    const submitForm = (e)=>{
        e.preventDefault();
        formData.presupuesto = parseFloat(formData.presupuesto);
        edit(
            {
                variables:{nombre:formData.nombre,id:_id,presupuesto:formData.presupuesto}
            }
        );

    }

    return (

        <div>


            <div className="contenedor ">

                <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                    <form onSubmit={submitForm} ref={form} onChange={updateFormData} action="" >


                        <div className="w-72 h-20 imagen m-auto" ></div>
                        <h1 className="text-4xl mt-10 mb-10 text-center">Actualizar Proyecto</h1>


                        <div className="flex flex-row">

                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Nombre Del Proyecto :
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Nombre :" name="nombre" defaultValue={data.Proyecto.nombre} />
                            </div>


                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Presupuesto Del Proyecto :
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Apellido :" name="presupuesto" defaultValue={data.Proyecto.presupuesto} />
                            </div>


                        </div>


                        <div className="flex flex-row">
                            <input className="campo w-full cursor-pointer mb-10 boton" type="submit" value="Actualizar" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditarProyecto
