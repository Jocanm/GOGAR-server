import { gql } from "apollo-server-express";


export const tiposAvance = gql`
    
    type Avance{
        _id:ID!
        fecha:Date!
        descripcion:String!
        observaciones:[String]
        proyecto:Proyecto!
        creadoPor:Usuario!
    }

    type Query{
        Avances:[Avance]
        Avance(_id:String!):Avance
        filtrarAvances(
            idProyecto:String!
        ):[Avance]
    }

    type Mutation{
        crearAvance(
            descripcion:String!
            proyecto:String!
            creadoPor:String!
        ):Avance

        editarAvance(
            _id:String!
            descripcion:String
            observaciones:[String]
        ):Avance
    }

`;
