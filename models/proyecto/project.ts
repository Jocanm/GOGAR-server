import {Schema,model} from 'mongoose'
import { Enum_estadoProyecto, Enum_faseProyecto } from '../enums/enums'
import { ObjetiveModel } from '../objetivo/objetivo'
import { UserModel } from '../usuario/user'

interface Projecto{
    nombre:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    estado:Enum_estadoProyecto,
    fase:Enum_faseProyecto,
    lider:Schema.Types.ObjectId
    // objetivos:[Schema.Types.ObjectId]
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
        default:Enum_estadoProyecto.INACTIVO
    },
    fase:{
        type:String,
        enum:Enum_faseProyecto,
        default:Enum_faseProyecto.NULA
    },
    lider:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:UserModel
    },
    // objetivos:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:ObjetiveModel
    //     }
    // ]
})

projectSchema.virtual("avances",{
    ref: "Avance",
    localField:"_id",
    foreignField:"proyecto"
})

export const ProjectModel = model("Proyecto",projectSchema,"proyectos")