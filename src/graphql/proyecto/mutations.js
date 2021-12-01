const { default: gql } = require("graphql-tag");




const cambiarEstadoProyecto = gql`
mutation CambiarEstadoProyecto($cambiarEstadoProyectoId: String!, $estado: Enum_EstadoProyecto!) {
  CambiarEstadoProyecto(id: $cambiarEstadoProyectoId, estado: $estado) {
    _id
  }
}

`;



const cambiarFaseProyecto = gql`

mutation Mutation($cambiarFaseProyectoId: String!, $fase: Enum_FaseProyecto!) {
    CambiarFaseProyecto(id: $cambiarFaseProyectoId, fase: $fase) {
      _id
    }
  }

`;




export { cambiarEstadoProyecto ,cambiarFaseProyecto }