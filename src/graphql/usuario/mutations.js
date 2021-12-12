const { gql } = require("graphql-tag");





const EditarUsuario = gql`

mutation EditarUsuario($_id: String!, $nombre: String!, $apellido: String!, $identificacion: String!, $correo: String!) {
    editarUsuario(_id: $_id, nombre: $nombre, apellido: $apellido, identificacion: $identificacion, correo: $correo) {
      _id
apellido
nombre
identificacion
correo
rol
estado
        
    }
  }




`;



const BuscarUsuario = gql `

query Usuario($id: String!) {
  Usuario(_id: $id) {
    _id
    nombre
    apellido
    identificacion
    correo
    rol
    estado
  }
}

`;


const CambiarEstado = gql`


mutation CambiarEstadoUsuario($_id: String!, $estado: Enum_EstadoUsuario!) {
  CambiarEstadoUsuario(_id: $_id, estado: $estado) {
    _id
  }
}

`;




export { EditarUsuario ,CambiarEstado}












