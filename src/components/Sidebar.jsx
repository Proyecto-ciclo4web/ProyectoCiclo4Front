import { useAuth } from 'context/autentificacion';
import PrivateComponent from 'context/PrivateComponent';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'styles/LogoFinal.png'


const SidebarLinks = () => {
  return (
    <ul className='mt-12'>






      <PrivateComponent roleList={"ADMINISTRADOR"}>

        <div className=" text-center bg-gray-400 rounded-md  campo mb-10">ADMINISTRADOR</div>

        <SidebarRoute to='/perfil' title='Mi Perfil' icon='fas fa-user' />

        <SidebarRoute to='/verusuarios' title='Usuarios' icon='fas fa-users' />


        <SidebarRoute to='/verProyectos' title='Proyectos' icon='fas fa-book' />

        <Logout />

      </PrivateComponent>



      <PrivateComponent roleList={"ESTUDIANTE"}>

        <SidebarRoute to='/perfil' title='Mi Perfil' icon='fas fa-user' />


        <SidebarRoute to='/VerProyectosEstu' title='Proyectos' icon='fas fa-book' />

        <SidebarRoute to='/MisProyectos' title='Mis proyectos' icon='fas fa-book' />

        <Logout />

      </PrivateComponent>



      <PrivateComponent roleList={"LIDER"}>

        <div className=" text-center bg-gray-400 rounded-md  campo mb-10">LIDER</div>
        <SidebarRoute to='/perfil' title='Mi Perfil' icon='fas fa-user' />

        <SidebarRoute to='/VerEstudiantes' title='Estudiantes ' icon='fas fa-user-graduate' />

        <SidebarRoute to='/NuevoProyecto' title='Crear Proyecto ' icon='fas fa-lightbulb' />

        <SidebarRoute to='/ProyectosLiderados' title='Mis Proyectos ' icon='fas fa-book' />


        <Logout />

      </PrivateComponent>


    </ul>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to='/login' className='sidebar-route text-red-700'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt' />
          <span className='text-sm  ml-2'>Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};


const Logo = () => {
  return (
    <div className='py-3 w-full flex flex-col items-center justify-center'>
      <img src={logo} alt='Logo' className='w-full' />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-blue-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-blue-500'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
