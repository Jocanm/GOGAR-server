import {gql} from 'apollo-server-express'

export const tiposAutenticacion = gql`

    type Token{
        token:String
        error:String
    }

    type Mutation{
        Registro(
            nombre: String!
            apellido: String!
            identificacion:String!
            correo:String!
            rol:Enum_Rol!
            estado:Enum_estadoUsuario
            password:String!
        ): Token!

        Login(
            correo:String!
            password:String!
        ): Token!

        RefrescarToken:Token
    }

`;