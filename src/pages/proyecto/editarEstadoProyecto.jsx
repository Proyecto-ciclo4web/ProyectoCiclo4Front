import { useMutation, useQuery } from '@apollo/client';
import DropDown from 'components/Dropdown';
import { cambiarEstadoProyecto } from 'graphql/proyecto/mutations';
import { Proyecto } from 'graphql/proyecto/querys';
import useFormData from 'hooks/useFormData';
import React from 'react'
import { useParams } from 'react-router';
import { Enum_EstadoProyecto } from 'utils/enums';
import PrivateRoute from 'context/PrivateRoute';






const EditarEstadoProyecto = () => {

    const { _id } = useParams();
    console.log(_id);
    const { form, formData, updateFormData } = useFormData(null);
    const { data, loading, error } = useQuery(Proyecto, {
        variables: { proyecto: _id }

    })


    const [cambiarEstado,{data1,loading1,error1}]=useMutation(cambiarEstadoProyecto,{
        variables:{cambiarEstadoProyectoId:_id}
    })


    console.log("el estado es : ", data)


    const submitForm = (e) => {
        e.preventDefault();
        console.log("el nuevo estado es",formData)
        cambiarEstado({
            variables:{_id, ...formData}
        }
    
        )


    }

    if (loading) {
        return <div>Cargando...</div>
    }


    return (

        <PrivateRoute roleList={"ADMINISTRADOR"}>
        <div className="contenedor ">
            <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">

            <div className="text-4xl mt-10 mb-10 text-center">Estado Proyecto :</div>


                <form  className="flex flex-col" ref={form} onChange={updateFormData} onSubmit={submitForm} action="">

                    <div className="flex flex-col" >
                        <label htmlFor="nombre"></label>Estado Proyecto Actual  :
                        <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" defaultValue={data.Proyecto[0].estado} disabled />
                    </div>

         
                    <DropDown
                            label='Cambiar Estado'
                            name='estado'
                            required={true}
                            options={Enum_EstadoProyecto}
                        />


                    <input className="campo w-80  boton cursor-pointer mb-10" type="submit" value="Actualizar Estado " />

                </form>


            </div>
        </div>
        </PrivateRoute>
    )
}

export default EditarEstadoProyecto
