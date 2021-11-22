import { gql } from "apollo-server-express";


export const tiposEnums = gql`
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

    enum Enum_tipoObjetivo{
    GENERAL
    ESPECIFICO
    }

    enum Enum_estadoInscripcion{
    ACEPTADA
    RECHAZADA
    PENDIENTE
}
`;

