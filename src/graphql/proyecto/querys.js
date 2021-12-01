const { default: gql } = require("graphql-tag");




const buscarProyectos = gql `


query Proyectos {
    Proyectos {
      _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
      lider {
        _id
        nombre
      }
      objetivos {
        _id
        descripcion
      }
      avances {
        _id
        fecha
      }
      inscripciones {
        _id
        estado
      }
    }
  }


`;


const verInscripciones = gql`

query Inscripcion($proyecto: String!) {
  Inscripcion(proyecto: $proyecto) {
    _id
    estado
    fechaIngreso
    fechaEgreso
    proyecto {
      nombre
      
    }
    estudiante {
      nombre
      identificacion
    }
  }
}

`;



const verAvances = gql `

query FiltrarAvance($idProyecto: String!) {
  filtrarAvance(idProyecto: $idProyecto) {
    _id
    fecha
    descripcion
    proyecto {
      nombre
    }
    creadoPor {
      nombre
      identificacion
    }
    observaciones
  }
}


`;


const Proyecto = gql `
query Proyecto($proyecto: String!) {
  Proyecto(Proyecto: $proyecto) {
    _id
    estado
    fase
  }
}

`;












export {buscarProyectos,verInscripciones,verAvances,Proyecto}

