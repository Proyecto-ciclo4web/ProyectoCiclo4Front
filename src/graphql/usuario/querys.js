const { default: gql } = require("graphql-tag");

const getUsuarios = gql`

query Query {
    Usuarios {
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


const BuscarUsuario = gql`

query Usuario($_id: String!) {
  Usuario(_id: $_id) {
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



const Estudiantes = gql`

query Query {
  Estudiantes {
    _id
    nombre
    apellido
    identificacion
    correo
    estado
  }
}
`;







export { getUsuarios , BuscarUsuario, Estudiantes}