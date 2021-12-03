import { gql } from "apollo-server-express";

export const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripciones]
    Incripcion(_id: String!): Inscripcion
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String): Inscripcion
  }
`;
