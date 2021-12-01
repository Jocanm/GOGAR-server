import {gql} from 'apollo-server-express';

const tiposAvance = gql`
type Avance {
    fecha:Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: User!
}

type Query{
    Avances: [Avence]
}

type Mutation{
    crearAvance(
        fecha:Date!
        descripcion: String!
        proyecto: String!
        creadoPor: String!
    ): Avance
}
`;

export {tiposAvance};