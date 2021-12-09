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
        },
        inscripcionesEstudiante: async (parent,args) => {
            const inscripciones = await InscripcionModel.find({
                estudiante:args._id
            }).populate([
                {
                    path:"estudiante"
                },  
                {
                    path:"proyecto",
                    populate:[{path:"objetivos"},{path:"lider"}]
                }
            ])
            return inscripciones;
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args,context) => {
            const inscripcionCreada = await InscripcionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            })
            const inscripcion = await InscripcionModel.findOne({_id:inscripcionCreada._id}).populate("proyecto").populate("estudiante")

            return inscripcion;

            // const {_id,nombre} = context.userData

            // const inscripcionExistente = await InscripcionModel.findOne({
            //     estudiante:_id,
            //     proyecto:args.proyecto
            // })

            // console.log(_id,nombre)
            // console.log(inscripcionExistente);
            
        }
    }
}