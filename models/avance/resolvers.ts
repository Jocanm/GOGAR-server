import { AvanceModel } from "./avance";

export const resolversAvance = {

    Query:{
        Avances: async (parent,args) => {
            const avances = await AvanceModel.find().populate("proyecto").populate("creadoPor")
            return avances;
        },
        Avance: async(parent,args) => {
            const avance = await AvanceModel.findOne({_id:args._id})
            return avance;
        },
        filtrarAvances: async(parent,args) => {
    
            const avancesFiltrados = AvanceModel.find({
                proyecto:args.idProyecto
            }).populate("proyecto")
            return avancesFiltrados;
        }
    },
    Mutation:{
        crearAvance: async(parent,args) => {

            const avance = await AvanceModel.create({
                fecha:args.fecha,
                descripcion:args.descripcion,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor
            })
            return avance;
        }
    }

}