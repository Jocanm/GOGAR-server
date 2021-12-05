import { ObjetiveModel } from './objetivo'


export const resolverObjetivo = {

    Query:{
        Objetivos: async(parent,args) =>{
            const objetivos = await ObjetiveModel.find().populate("proyecto")
            return objetivos
        },
        Objetivo: async (parent,args)=>{
        const objetivo= await ObjetiveModel.findOne({_id:args._id}).populate("proyecto")
        return objetivo
        }
    },
    Mutation:{
        crearObjetivo: async(parent,args) =>{
            const objetivo= await ObjetiveModel.create({
                descripcion:args.descripcion,
                tipo:args.tipo,
                proyecto:args.proyecto
            })
            return objetivo
        },
        actualizarObjetivo: async(parent,args) => {
            return await ObjetiveModel.findByIdAndUpdate(args._id,{
                descripcion:args.descripcion,
                tipo:args.tipo
            },{new:true})
        }
    }
}


