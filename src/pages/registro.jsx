
import { useMutation } from "@apollo/client";
import DropDown from "components/Dropdown";
import { Registrar } from "graphql/autentificacion/mutations";
import useFormData from "hooks/useFormData";
import { useEffect } from "react";
import { Enum_Rol } from "utils/enums";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuContext } from "context/autentificacion";
import { useAuth } from "context/autentificacion";

const Registro = () => {
    const {setToken} = useAuth();
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData(null);
    const [registrar,{data,error,loading}]=useMutation(Registrar);
    const submitForm = (e) => {
        e.preventDefault();
        console.log("los datos son ", formData)
        registrar({
            variables:{...formData}
        })
    }
    useEffect(()=>{
      if(data){
        if(data.registro.token){
            setToken(data.registro.token)
            navigate("/");
        }
      }
    },[data])
    return (
        <div className="">
            <div className="contenedor ">
                <form onChange={updateFormData} ref={form} onSubmit={submitForm} action="" className="bg-white  flex flex-col pr-10 pl-10 sombra">
                    <div className="w-72 h-20 imagen m-auto" ></div>
                    <h1 className="text-4xl   text-center mb-20">Registro</h1>
                    <div className="flex flex-row gap-10">
                        <input name="nombre" className="w-80 campo mb-10" type="text" placeholder="Nombre" />
                        <input name="apellido" className="w-80 campo mb-10" type="text" placeholder="Apellido" />
                    </div>
                    <div className="flex flex-row gap-10">
                        <input name="correo" className="w-80 campo mb-10" type="email" placeholder="Correo" />
                        <input name="identificacion" className="w-80 campo mb-10" type="number" placeholder="Identificacion" />
                    </div>
                    <div className="flex flex-row gap-10">
                        <input name="password" className="w-80 campo mb-10" type="password" placeholder="Contraseña" />
                        <DropDown
                            name='rol'
                            required={true}
                            options={Enum_Rol}
                        />
                    </div>
                    <input type="submit" className=" w-full boton campo mb-10 campo hover:bg-green-600 cursor-pointer" value="Registrar" />
                </form>
            </div>
        </div>
    )






}



export default Registro;
