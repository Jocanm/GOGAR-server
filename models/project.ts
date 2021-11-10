import {Schema,model} from 'mongoose'
import { Enum_estadoProyecto, Enum_faseProyecto } from './enums'
import { UserModel } from './user'

interface Projecto{
    nombre:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    estado:Enum_estadoProyecto,
    fase:Enum_faseProyecto,
    lider:Schema.Types.ObjectId
}


const projectSchema = new Schema<Projecto>({
    nombre:{
        type:String,
        required:true
    },
    presupuesto:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFin:{
        type:Date,
        required:true
    },
    estado:{
        type:String,
        enum:Enum_estadoProyecto,
        default:Enum_estadoProyecto.inactivo
    },
    fase:{
        type:String,
        enum:Enum_faseProyecto,
        default:Enum_faseProyecto.nula
    },
    lider:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:UserModel
    }
})

export const ProjectModel = model("Proyecto",projectSchema,"proyectos")