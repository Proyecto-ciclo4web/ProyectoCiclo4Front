

const { default: gql } = require("graphql-tag");




const buscarProyectos = gql`


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



const verAvances = gql`

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
    observacion
  }
}


`;


const Proyecto = gql`
query Proyecto($id: String!) {
  Proyecto(_id: $id) {
    _id
    estado
    fase
  }
}

`;


const verObjetivos = gql`
query Proyecto($id: String!) {
  Proyecto(_id: $id) {
    _id
    nombre
    objetivos {
      _id
      tipo
      descripcion
    }
  }
}
`;




const proyectosLiderados = gql`

query FiltrarProyectosLider($lider: String!) {
  FiltrarProyectosLider(lider: $lider) {
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
  }
}



`;


const Proyecto1 = gql`
query Proyecto($id: String!) {
  Proyecto(_id: $id) {
    _id
    nombre
    presupuesto
    objetivos {
      _id
      descripcion
      tipo
    }
  }
}`;



const Inscripcion1 = gql`
query Inscripcion1($id: String!) {
  Inscripcion1(_id: $id) {
    _id
    estado
    fechaIngreso
    fechaEgreso
    proyecto {
      _id
      nombre
    }
    estudiante {
      _id
      nombre
    }
  }
}
`;





const aprobarInscripcion = gql`
mutation AprobarInscripcion($aprobarInscripcionId: String!) {
  aprobarInscripcion(id: $aprobarInscripcionId) {
    _id
  }
}

`;



const agregarObservacion1 = gql`
query Avance($id: String!) {
  Avance(_id: $id) {
    _id
    observacion
  }
}
`;


const observacion1 = gql`
mutation AgregarObservacion($id: String!, $observacion: String!) {
  AgregarObservacion(_id: $id, observacion: $observacion) {
    _id
  }
}
`;

const inscripcionesEstudiante = gql`
query InscripcionEstudiante($estudiante: String!) {
  InscripcionEstudiante(estudiante: $estudiante) {

    proyecto {
    _id
      nombre
      presupuesto
      fechaInicio
      fechaFin
      estado
      objetivos {
        descripcion
        tipo
      }
      avances {
        fecha
        descripcion
        observacion
        proyecto {
          nombre
        }
        creadoPor {
          nombre
        }
      }
    }
  }
}
`



export { buscarProyectos,observacion1 , agregarObservacion1, verInscripciones, verAvances, Proyecto, verObjetivos, proyectosLiderados, Proyecto1 ,Inscripcion1,aprobarInscripcion, inscripcionesEstudiante}

