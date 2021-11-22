import { ProjectModel } from "./project";

export const resolversProyecto = {

    Query:{
        Proyectos: async (parent,args) => {
            return await ProjectModel.find().populate("lider").populate("avances")
        },
        Proyecto: async (parent,args) => {
            return await ProjectModel.findOne({_id:args._id}).populate("lider")
        }
    },
    Mutation:{
        crearProyecto: async(parent,args) => {
            const proyecto = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                lider:args.lider
            })

            return proyecto;
        }
    }
}