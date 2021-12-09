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
        objetivos:[Objetivo]
        inscripciones:[Inscripcion]
    }

    type Query{
        Proyectos:[Proyecto]
        Proyecto(_id:String!):Proyecto
    }

    type Mutation{
        crearProyecto(
            nombre:String!
            presupuesto:Float!
            lider:String!
        ):Proyecto

        aprobarProyecto(
            _id:String!
        ):Proyecto

        inactivarProyecto(_id:String!):Proyecto

        terminarProyecto(_id:String!):Proyecto

        actualizarProyecto(
            _id:String!
            nombre:String!
            presupuesto:Float!
        ):Proyecto
    }
`;

