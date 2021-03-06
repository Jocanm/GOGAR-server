import { gql } from "apollo-server-express";


export const tiposUsuario = gql`

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        estado:Enum_estadoUsuario!
        rol:Enum_Rol!
        password:String!
        inscripciones:[Inscripcion]
        projectosLiderados:[Proyecto]
    }

    type Query{
        Usuarios:[Usuario]
        Usuario(_id:String!):Usuario
    }

    type Mutation{
        crearUsuario(
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        rol:Enum_Rol!
        estado:Enum_estadoUsuario
        ):Usuario

        eliminarUsuario(
            _id:String
            correo:String
        ):Usuario

        editarUsuario(
            _id:String!
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            estado:Enum_estadoUsuario!
            password:String
        ):Usuario
    }
`;

