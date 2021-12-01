import { AvancesModel } from "./avances";


const resolversAvance = {
    Query:{
        Avances: async(parent, args) => {
            const avances = await AvancesModel.find();
            return avances;
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

export {resolversAvance};   