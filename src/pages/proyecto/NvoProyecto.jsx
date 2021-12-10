import PrivateRoute from 'context/PrivateRoute'
import React, {useEffect, useState} from 'react'
import { getUsuarios } from 'graphql/usuario/querys';
import { useQuery, useMutation } from '@apollo/client';
import DropDown from 'components/Dropdown';
import useFormData from 'hooks/useFormData';
import { Enum_TipoObjetivo } from 'utils/enums';
import { nanoid } from 'nanoid';
import { ObjetoContext } from 'context/ObjetoContext';
import { useObjeto } from 'context/ObjetoContext';
import { crearProyecto} from 'graphql/proyecto/mutations';


const NvoProyecto = () => {
    const {form, formData, updateFormData}=useFormData();
    const [listaUsuarios, setListaUsuarios]=useState({});
    const {data, loading, error}= useQuery(getUsuarios,{
        variables:{
            filtro: {rol:'LIDER', estado:'AUTORIZADO'}
        }
    });

    const [CrearUnProyecto, {data:mutationData, loading:mutationLoading, error:mutationError }]=useMutation(crearProyecto);

    useEffect(()=>{
        console.log(data)
        if(data){
            const lu = {};
            data.Usuarios.forEach(elemento=>{
                lu[elemento._id] = elemento.correo;
            })
            console.log(lu)
            setListaUsuarios(lu);
        }
    }, [data]);

    useEffect(()=>{
        console.log('cont de mutation data', mutationData)
    })

    const submitForm= (e)=>{
        e.preventDefault();
       
        formData.objetivos =Object.values(formData.objetivos);
        formData.presupuesto=parseFloat(formData.presupuesto) 
        
        CrearUnProyecto({
            variables: formData,
        })
    }
    if (loading) return <div>loading</div>

    return (
        <div>
            <PrivateRoute roleList={'LIDER'}>
                <div className="contenedor overflow-auto opacity-80">
                    <div className="bg-white  flex flex-col pr-10 pl-10 sombra overflow-auto opacity-80">
            <h1 className='text-center'>Crear Nuevo Proyecto</h1>
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
                <div className="flex flex-col">
                    <label htmlFor="nombre"></label>Nombre :
                    <input className="w-80 campo mb-5 mr-4 bg-gray-400" type="text" name="nombre"  />
                </div>  

                <div className="flex flex-col">
                    <label htmlFor="presupuesto"></label>Presupuesto :
                    <input className="w-80 campo mb-5 mr-4 bg-gray-400" type="number" name="presupuesto" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="fechaInicio"></label>Fecha de inicio :
                    <input className="w-80 campo mb-5 mr-4 bg-gray-400" type="date" name="fechaInicio"  />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="fechaFin"></label>Fecha de Fin :
                    <input className="w-80 campo mb-5 mr-4 bg-gray-400" type="date" name="fechaFin"  />
                </div>

                <div><label htmlFor="">lider : </label></div>

                <DropDown label='lider' name='lider' required={true} options={listaUsuarios} className='mb-5' />

                <Objetivos/>

                <input type="submit" className=" w-80 boton campo mb-5 campo hover:bg-green-600 cursor-pointer" value="Crear Proyecto" />                 
                
            </form>
            </div>
            </div>
            </PrivateRoute>
        </div>
    )
}

const Objetivos=()=>{
    const [listaObjetivos, setListaObjetivos]=useState([]);
    
    const compObjetivoAgregado=()=>{
        const id= nanoid();
        return <FormObjetivo key={id} id={id}/>; 
    }
    const eliminarObjetivo = (id) => {
        setListaObjetivos(listaObjetivos.filter((elem) => elem.props.id !== id));
    };
    return( 
    <ObjetoContext.Provider value={{eliminarObjetivo}}>
    <div>
        <div className='flex justify-between mx-2 mb-1' >
            <div>Agregar Objetivo</div>
            <div> <i onClick={() => setListaObjetivos([...listaObjetivos, compObjetivoAgregado()])}
            className='fas fa-plus p-2 mx-2 cursor-pointer bg-green-500 hover:bg-green-600 ' /> </div> 
        </div>
        {listaObjetivos.map(objetivo=>{
        return objetivo;
    })}
    </div>
    </ObjetoContext.Provider>
    );
};



const FormObjetivo =({id})=>{ 
    const {eliminarObjetivo}=useObjeto();
   return(
       <div>     
           <div><label htmlFor="">Tipo de Objetivo : </label></div>
           <DropDown name={`nested||objetivos||${id}||tipo`} required={true} options={Enum_TipoObjetivo} />

           <div><label htmlFor="descripcion">Descripcion de objetivo </label></div>
           
           <textarea name={`nested ||objetivos||${id}||descripcion`} type='text' required='true' rows="2" cols="30" id="descripcion" className="w-80 campo mb-1 mr-1 p-0">
           </textarea>
           
 


           <div className='flex justify-between mx-2' >
           <div>Eliminar Objetivo</div>
           <div> <i onClick={()=>eliminarObjetivo(id)}   
               className='fas fa-minus p-2 mx-2 mb-2 cursor-pointer bg-red-600 hover:bg-red-900' /> </div>
           </div>
       </div>
   )
};


export default NvoProyecto;












