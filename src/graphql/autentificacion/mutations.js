const { default: gql } = require("graphql-tag");



const Registrar = gql `

mutation Registro(
  $nombre: String!
  $apellido: String!
  $identificacion: String!
  $correo: String!
  $rol: Enum_Rol!
  $estado: Enum_EstadoUsuario
  $password: String!
) {
  registro(
    nombre: $nombre
    apellido: $apellido
    identificacion: $identificacion
    correo: $correo
    rol: $rol
    estado:$estado
    password: $password
  ) {
    token
    error
  }
}


`;


const Login1 = gql `


mutation Mutation($correo: String!, $password: String!) {
  login(correo: $correo, password: $password) {
    token
    error
  }
}

`;


const REFRESH_TOKEN = gql `
mutation RefreshTokenn {
  RefreshTokenn {
    token
    error
  }
}

`;





export {Registrar,Login1,REFRESH_TOKEN};


