import { ObjetivoModel } from './objectivo'


export const resolverObjetivo = {

    Query:{
        objetivos: async(parent,args)=>{
            const objetivos= await ObjetivoModel.find().populate("proyecto")
            return objetivos
        },
        objetivo: async (parent,args)=>{
        const objetivo= await ObjetivoModel.findOne({_id:args._id}).populate("proyecto")
        return objetivo
    },
    Mutation:{
        crearObjetivo: async(parent,args) =>{
            const objetivo= await ObjetivoModel.create({
                descripcion:args.descripcion,
                tipo:args.tipo,
                proyecto:args.proyecto
            })
            return objetivo
        }
    }




}















}

