import React from 'react'
import { editarAvance } from 'graphql/proyecto/mutations'
import { useParams } from 'react-router';
import { useMutation } from '@apollo/client';
import useFormData from 'hooks/useFormData';
import ButtonLoading from 'components/ButtonLoading';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const EditarAvances = () => {
    const { _id } = useParams();
    const { form, formData, updateFormData } = useFormData(null);

    const [EditarAvance,{data:mutationData, error:mutationError}]=useMutation(editarAvance,{
        variables:{id: _id}
    })

    const submitForm = (e) => {
        e.preventDefault();
        EditarAvance({
          variables: {_id, ...formData}});
        console.log(formData)
      };

      useEffect(() => {
        if (mutationData) {
          toast.success('Avance editado');
        }
      }, [mutationData]);
      useEffect(() => {
        if (mutationError) {
          toast.error('Error modificando el usuario');
        }
      }, [mutationError]);

    return (
        <div className='mt-40'>
            <h1 className='text-2xl font-bold text-gray-900 text-center'>Editar Descripción</h1>
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
            <div className="flex flex-row justify-center p-4">
                <div className="flex flex-col">
                     <label htmlFor="descripcion"></label>Descripción:
                            <input className="w-80 campo mb-10 mr-4" type="text" placeholder="Descripción  :" name="descripcion" />
            <ButtonLoading text='Editar' loading={false} disabled={false}/>
                </div>
            </div>

            </form>

        </div>
    )
}

export default EditarAvances
