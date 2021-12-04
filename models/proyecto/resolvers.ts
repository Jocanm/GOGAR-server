import { Enum_estadoProyecto, Enum_faseProyecto } from "../enums/enum";
import { ProyectoModel } from "./proyecto"


export const resolversProyecto = {
    Query:{
        Proyectos: async (parent,args) => {
            const proyectos = await ProyectoModel.find().populate("lider").populate("avances").populate("objetivos")
            return proyectos;
        },
        Proyecto: async(parent,args) =>{
            const proyecto = await ProyectoModel.findOne({_id:args._id}).populate("lider").populate("avances").populate("objetivos")
            return proyecto;
        }
    },
    Mutation:{
        crearProyecto: async(parent,args) => {
            const proyecto = await ProyectoModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                lider:args.lider
            })
            return proyecto;
        },
        aprobarProyecto: async(parent,args) => {

            //MUTACION PARA CAMBIAR EL ESTADO DE UN PROYECTO A ACTIVA Y CAPTURAR LA FECHA DE INICIO

            //SI LA FASE DEL PROYECTO ES NULA, EL SISTEMA ADEMAS DE CAMBIAR EL ESTADO Y LA FECHA, TAMBIEN CAMBIARÁ LA FASE A INICIADO

            const project = await ProyectoModel.findOne({_id:args._id})

            if(project.fase === Enum_faseProyecto.NULA){
                return await ProyectoModel.findByIdAndUpdate(args._id,{
                    estado:Enum_estadoProyecto.ACTIVO,
                    fechaInicio:new Date(Date.now()),
                    fase: Enum_faseProyecto.INICIADO
                },{new:true})
            }

            else{
                return await ProyectoModel.findByIdAndUpdate(args._id,{
                    estado:Enum_estadoProyecto.ACTIVO,
                    fechaInicio:new Date(Date.now())
                },{new:true})
            }

        },
        inactivarProyecto: async(parent,args) => {
            return await ProyectoModel.findByIdAndUpdate(args._id,{
                estado:Enum_estadoProyecto.INACTIVO
            },{new:true})
        }
    }
}