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

const crearProyecto = gql`
mutation CrearProyecto($nombre: String!, $presupuesto: String!, $fechaInicio: String, $fechaFin: String, $estado: Enum_EstadoProyecto, $fase: Enum_FaseProyecto, $lider: String!, $objetivos: [crearObjetivo]){
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaFin: $fechaFin, estado: $estado, fase: $fase, lider: $lider, objetivos: $objetivos) {
   nombre
  }
}
`;





export { cambiarEstadoProyecto ,cambiarFaseProyecto }