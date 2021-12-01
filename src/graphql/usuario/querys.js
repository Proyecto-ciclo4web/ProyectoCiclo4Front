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








export { getUsuarios, BuscarUsuario,  }