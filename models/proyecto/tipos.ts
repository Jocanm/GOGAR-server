import { gql } from "apollo-server-express";


export const tiposProyecto = gql`
    type Proyecto{
        _id:ID!
        nombre:String!
        presupuesto:Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado:Enum_estadoProyecto!
        fase:Enum_faseProyecto!
        lider:Usuario!
        avances:[Avance]
    }

    type Query{
        Proyectos:[Proyecto]
        Proyecto(_id:String!):Proyecto
    }

    type Mutation{
        crearProyecto(
            nombre:String!
            presupuesto:Float!
            fechaInicio:Date!
            fechaFin:Date!
            estado:Enum_estadoProyecto
            fase:Enum_faseProyecto
            lider:String!
        ):Proyecto
    }
`;

