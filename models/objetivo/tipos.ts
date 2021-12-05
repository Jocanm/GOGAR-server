import { gql } from "apollo-server-express";

export const tiposObjetivo = gql`
    type Objetivo{
        _id:ID!
        descripcion:String!
        tipo:Enum_tipoObjetivo!
        proyecto:Proyecto!
    }
    type Query{
        Objetivos:[Objetivo]
        Objetivo(_id:String!):Objetivo
    }
    type Mutation{
        crearObjetivo(
            descripcion:String!
            tipo:Enum_tipoObjetivo!
            proyecto:String!
        ):Objetivo

        actualizarObjetivo(
            _id:String!
            descripcion:String!
            tipo:Enum_tipoObjetivo!
        ):Objetivo
    }
`;