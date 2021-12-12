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



const crearProyecto1 = gql`
mutation Mutation($nombre: String!, $presupuesto: Float!, $lider: String!, $fechaInicio: Date!, $fechaFin: Date!, $objetivos: [crearObjetivo]) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, lider: $lider, fechaInicio: $fechaInicio, fechaFin: $fechaFin ,    objetivos: $objetivos ) {
    _id
  }
}
`;








export { cambiarEstadoProyecto ,cambiarFaseProyecto ,crearProyecto1}