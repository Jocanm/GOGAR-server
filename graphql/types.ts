import { gql } from "apollo-server-express";


export const typeDefs = gql`

    scalar Date

    enum Enum_estadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_estadoProyecto{
        ACTIVO 
        INACTIVO 
    }

    enum Enum_faseProyecto{
        INICIADO 
        DESARROLLO 
        TERMINADO 
        NULA 
    }

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        estado:Enum_estadoUsuario!
        rol:Enum_Rol!
    }

    type Proyecto{
        _id:ID!
        nombre:String!
        presupuesto:Float!
        fechaInicio:Date!
        fechaFin:Date!
        estado:Enum_estadoProyecto!
        fase:Enum_faseProyecto!
        lider:Usuario!
    }

    type Query{
        Usuarios:[Usuario]
        Usuario(_id:String!):Usuario
        Proyectos:[Proyecto]
        Proyecto(_id:String!):Proyecto
    }

    type Mutation{
        crearUsuario(
        nombre: String!
        apellido: String!
        identificacion:String!
        correo:String!
        estado:Enum_estadoUsuario
        rol:Enum_Rol!
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
            rol:Enum_Rol!
            estado:Enum_estadoUsuario!
        ):Usuario

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

