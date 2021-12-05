import { gql } from 'apollo-server-express';

export const tiposAvance = gql`
type Avance {
    _id:ID!
    fecha:Date!
    descripcion: String!
    observaciones: [String]!
    proyecto: Proyecto!
    creadoPor: Usuario!
}

type Query{
    Avances: [Avance]
    Avance(_id:String!):Avance
}

type Mutation{
    crearAvance(
        descripcion: String!
        proyecto: String!
        creadoPor: String!
    ): Avance

    observacionesAvance(
        _id:String!
        observaciones:[String]!
    ):Avance

    editarAvance(
        _id:String!
        descripcion:String!
    ): Avance
}
`;
