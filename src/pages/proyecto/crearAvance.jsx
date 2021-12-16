import React from 'react'

import ButtonLoading from 'components/ButtonLoading'
import { crearAvance } from 'graphql/proyecto/mutations'
import { useUser } from 'context/userContext'
import useFormData from 'hooks/useFormData'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

const CrearAvance = () => {
    const { form, formData, updateFormData } = useFormData();
    const { userData } = useUser();
    const [crearAvances, { data}] =
    useMutation(crearAvance);
    const { _id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();
        crearAvances({
          variables: {formData, fecha: formData.fecha, descripcion: formData.descripcion, creadoPor: userData._id,  proyecto: _id}});
        console.log(data)
      };

    return (
        <div className='p-10 flex flex-col items-center'>
        <div className='self-start'>
        </div>
        <h1 className='text-2xl font-bold text-gray-900'>Crear Nuevo Avance</h1>
  
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>

            <div className="flex flex-col">
                <label htmlFor="nombre"></label>Fecha:
                        <input className="w-80 campo mb-10 mr-4" type="date" placeholder="Fecha :" name="fecha"/>
                </div>

                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="nombre"></label>Descripción:
                                <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Descripción  :" name="descripcion" />
                            </div>
                        </div>




              <ButtonLoading text='Crear Avance' loading={false} disabled={false} o />
            </form>
  
      </div>

    )
}

export default CrearAvance
