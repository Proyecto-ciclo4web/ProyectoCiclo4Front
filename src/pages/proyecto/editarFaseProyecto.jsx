import { useMutation, useQuery } from '@apollo/client';
import DropDown from 'components/Dropdown';
import { cambiarFaseProyecto } from 'graphql/proyecto/mutations';
import { Proyecto } from 'graphql/proyecto/querys';
import useFormData from 'hooks/useFormData';
import React from 'react'
import { useParams } from 'react-router';
import { Enum_FasesProyecto } from 'utils/enums';
import PrivateRoute from 'context/PrivateRoute';


 




const EditarFaseProyecto = () => {

    const { _id } = useParams();

    const { data, loading, error } = useQuery(Proyecto, {
        variables: { proyecto: _id }

    })
    const { form, formData, updateFormData }=useFormData(null);


   const [cambiarFase,{data1,loading1,error1}]=useMutation(cambiarFaseProyecto,{
       variables:{cambiarFaseProyectoId:_id}
   })

    if(loading){
        return <div>Cargando...</div>
    }



    const submitForm = (e)=>{
        e.preventDefault();
        cambiarFase({
            variables:{_id, ...formData}
        })
      
    }

    return (
        <PrivateRoute roleList={"ADMINISTRADOR"}>
        <div>

            <div className="contenedor ">
                <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                <div className="text-4xl mt-10 mb-10 text-center">Fase Proyecto :</div>

                    <form  ref={form} onChange={updateFormData} onSubmit={submitForm} className="flex flex-col" action="">

                        <div className="flex flex-col" >
                            <label htmlFor="nombre"></label>Fase Proyecto Actual  :
                            <input className="w-80 campo mb-10 mr-4 bg-yellow-200"  defaultValue={data.Proyecto[0].fase} type="text" disabled />
                        </div>

                        <label htmlFor="">Cambiar Fase Del Proyecto </label>
                        <DropDown
                            label='Cambiar la fase '
                            name='fase'
                            required={true}
                            options={Enum_FasesProyecto}
                        />


                        <input className="campo w-80  boton cursor-pointer mb-10" type="submit" value="Actualizar Fase " />

                    </form>





                </div>
            </div>

        </div>
        </PrivateRoute>
    )
}

export default EditarFaseProyecto
