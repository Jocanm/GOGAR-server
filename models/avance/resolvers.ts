import { AvancesModel } from "./avances";


export const resolversAvance = {
    Query:{
        Avances: async(parent, args) => {
            const avances = await AvancesModel.find().populate("proyecto").populate("creadoPor");
            return avances;
        },
        Avance: async(parent,args) => {
            const avance = await AvancesModel.findOne({_id:args._id})
            return avance;
        }
    },
    Mutation:{
        crearAvance: async(parent, args) => {
            const avanceCreado = AvancesModel.create({
                fecha:new Date(Date.now()),
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
        observacionesAvance: async(par,args) => {
            return await AvancesModel.findByIdAndUpdate(args._id,{
                observaciones:args.observaciones
            },{new:true})
        },
        editarAvance: async(parent,args) => {
            return await AvancesModel.findByIdAndUpdate(args._id,{
                descripcion:args.descripcion
            },{new:true})
        }
    },
};

// export {resolversAvance};   