import { InscripcionModel } from "./inscripcion"

const resolverInscripciones = {
    Query:{
        Inscripciones: async(parent, args) =>{
            const inscripciones = await InscripcionModel.find():
            return inscripciones;
        },
    },
    Mutation:{
        crearInscripcion: async (parents, args) =>{
            const inscripcionCreada = await InscripcionModel.create({
                estado: args.estado,
                fechaIngreso: args.fechaIngreso,                
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        }
    }
}