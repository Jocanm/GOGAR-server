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
        },
        filtrarAvances: async(parent,args) => {
    
            const avancesFiltrados = AvancesModel.find({
                proyecto:args.idProyecto
            }).populate("proyecto")
            return avancesFiltrados;
        }
    },
    Mutation:{
        crearAvance: async(parent, args) => {
            const avanceCreado = AvancesModel.create({
                fecha:args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    },
};

// export {resolversAvance};   