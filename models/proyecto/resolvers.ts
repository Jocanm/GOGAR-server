import { ProjectModel } from "./project";

export const resolversProyecto = {

    Query:{
        Proyectos: async (parent,args) => {
            return await ProjectModel.find().populate("lider").populate("avances").populate("objetivos").populate({
                path:"inscripciones",
                populate:{
                    path:"estudiante"
                }
            })
        },
        Proyecto: async (parent,args) => {
            const proyecto =  await ProjectModel.findOne({_id:args._id}).populate("lider").populate("avances").populate("objetivos").populate("inscripciones")
            return proyecto
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