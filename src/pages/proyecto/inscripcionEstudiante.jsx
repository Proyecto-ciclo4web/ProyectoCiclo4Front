import React from 'react'
import { useUser } from 'context/userContext';
import { useParams } from 'react-router';
import { crearInscripcion } from 'graphql/proyecto/mutations';
import { useMutation } from '@apollo/client';

const InscripcionEstudiante = () => {
    const { userData, setUserData } = useUser();
    const { _id } = useParams();
    console.log(userData)

    const [crear, {data, loading, error}] = useMutation(crearInscripcion)

    const presionarBoton = (e) =>{
        console.log ('Si funciona')
        e.preventDefault()
        crear( {
            variables:{proyecto: _id, estudiante: userData._id, estado:"PENDIENTE"}
        }
        )

    }


    return (
        <div>
            <button className="campo   boton cursor-pointer mb-10" onClick={presionarBoton}>INSCRIBIRSE</button>
        </div>
    )
}

export default InscripcionEstudiante
