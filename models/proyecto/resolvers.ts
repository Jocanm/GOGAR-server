import { ProyectoModel } from "./proyecto"


export const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProyectoModel.find().populate("lider")
            return proyectos;
        },
        Proyecto: async(parent,args) =>{
            const proyecto = await ProyectoModel.findOne({_id:args._id}).populate("lider")
            return proyecto;
        }
    },
    Mutation:{
        crearProyecto: async(parent,args) => {
            const proyecto = await ProyectoModel.create({
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