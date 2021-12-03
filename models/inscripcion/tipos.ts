import { gql } from "apollo-server-express";

export const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_estadoInscripcion!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
    Incripcion(_id: String!): Inscripcion
  }

  type Mutation {
    crearInscripcion(
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  }
`;
