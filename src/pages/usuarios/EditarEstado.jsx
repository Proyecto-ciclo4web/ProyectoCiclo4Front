import { useMutation, useQuery } from '@apollo/client';
import DropDown from 'components/Dropdown';
import { CambiarEstado } from 'graphql/usuario/mutations';
import { BuscarUsuario } from 'graphql/usuario/querys';
import useFormData from 'hooks/useFormData';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom';
import { Enum_EstadoUsuario } from 'utils/enums';
import { Enum_Rol } from 'utils/enums';
import PrivateRoute from 'context/PrivateRoute';









const EditarEstado = () => {

    const { _id } = useParams();

    console.log(_id);


    const { data, loading, error } = useQuery(BuscarUsuario, {
        variables: { _id },
    });


    const [cambiarEstado, { data1, loading1, error1 }] = useMutation(CambiarEstado, {
        variables: { _id },
    })


    const { form, formData, updateFormData } = useFormData(null);


    const [estado, setEstado] = useState('');


    useEffect(() => { console.log("los datos son de cada uno : ", data) }, [data])


    const submitForm = (e) => {
        e.preventDefault();
        console.log("El Estado es  : ", formData.estado)

        cambiarEstado({
            variables:{_id, ...formData}
        })

    }

    if (loading) {
        //hace pagina de cargando
        return <div>CARGANDO</div>
    }


    return (

     
        <div className="contenedor ">
            <div className="bg-white  flex flex-col pr-10 pl-10 sombra h-full">
                <div className="text-4xl mt-10 mb-10 text-center">Usuario :</div>



                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Nombre :
                    <input className="w-80 campo mb-10 mr-4 bg-gray-400" type="text" name="e" defaultValue={data.Usuario.nombre} disabled />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Apellido :
                    <input className="w-80 campo mb-10 mr-4 bg-gray-400" type="text" name="e" defaultValue={data.Usuario.apellido} disabled />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Correo :
                    <input className="w-80 campo mb-10 mr-4 bg-gray-400" type="text" name="e" defaultValue={data.Usuario.correo} disabled />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Identificacion :
                    <input className="w-80 campo mb-10 mr-4 bg-gray-400" type="text" name="e" defaultValue={data.Usuario.identificacion} disabled />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Rol :
                    <input className="w-80 campo mb-10 mr-4 bg-gray-400" type="text" name="e" defaultValue={data.Usuario.rol} disabled />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Su Estado actual es  :
                    <input className="w-80 campo mb-10 mr-4 bg-yellow-200" type="text" name="e" defaultValue={data.Usuario.estado} disabled />
                </div>






                <form ref={form} onSubmit={submitForm} onChange={updateFormData}  >
                    <div className="flex flex-col">

                        {/* <select className="w-80 campo mb-10 mr-4" name="" id="" onChange={(e) => { Enum_EstadoUsuario(setEstado(e.target.value))}} >
                            <option  value="PENDIENTE">PENDIENTE</option>
                            <option value="AUTORIZADO">AUTORIZADO</option>
                            <option  value="NO_AUTORIZADO">NO_AUTORIZADO</option>
                        </select> */}
                        <label htmlFor="">Cambiar Estado : </label>
                        <DropDown
                            label='Cambiar Estado'
                            name='estado'
                            required={true}
                            options={Enum_EstadoUsuario}
                        />

                        <input  className="campo w-80  boton cursor-pointer mb-10" type="submit" value="Guardar Estado " />
                    </div>



                </form>









            </div>



        </div>

    )
}

export default EditarEstado
