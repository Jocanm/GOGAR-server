import { gql } from "apollo-server-express";

export const tiposInscripcion = gql`

    type Inscripcion{
        _id:ID!
        fechaIngreso:Date!
        fechaEgreso:Date!
        estado:Enum_estadoInscripcion!
        proyecto:Proyecto!
        estudiante:Usuario!
    }

    type Query{
        Inscripciones:[Inscripcion]
        Inscripcion(
            estudiante:String!
            proyecto:String!
        ):Inscripcion
        inscripcionesEstudiante(_id:String!):[Inscripcion]
    }

    type Mutation{
        crearInscripcion(
            proyecto:String!
            estudiante:String!
        ):Inscripcion
    }

`;