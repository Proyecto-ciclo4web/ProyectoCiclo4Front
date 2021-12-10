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
mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $fechaInicio: Date!, $fechaFin: Date!, $lider: String!, $objetivos: [crearObjetivo]){
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, fechaInicio: $fechaInicio, fechaFin: $fechaFin, lider: $lider, objetivos: $objetivos) {
   nombre
  }
}

`;





export { crearProyecto, cambiarEstadoProyecto, cambiarFaseProyecto }