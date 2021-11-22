import { InscripcionModel } from './inscripcion'

export const resolverIncripcion = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find().populate("proyecto").populate("estudiante")
            return inscripciones;
        },
        Inscripcion: async (parent, args) => {
            const inscripcion = await InscripcionModel.findOne({ _id: args._id }).populate("proyecto").populate("estudiante")
            return inscripcion;
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            })
            const inscripcion = await InscripcionModel.findOne({_id:inscripcionCreada._id}).populate("proyecto").populate("estudiante")

            return inscripcion;
        }
    }
}