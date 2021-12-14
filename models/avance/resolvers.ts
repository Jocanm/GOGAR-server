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
                fecha:new Date(Date.now()),
                descripcion:args.descripcion,
                proyecto:args.proyecto,
                creadoPor:args.creadoPor
            })
            return avance;
        },
        editarAvance: async(parent, args) => {

            if(args.observaciones){
                const avance = await AvanceModel.findByIdAndUpdate(args._id,{
                    observaciones:args.observaciones
                },{new:true})
                return avance
            }else{
                const avance = await AvanceModel.findByIdAndUpdate(args._id,{
                    descripcion:args.descripcion
                },{ new: true})
                return avance
            }
        }
    }

}
