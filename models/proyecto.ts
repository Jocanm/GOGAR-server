import { Schema,model } from "mongoose";
import { Enum_estadoProyecto, Enum_faseProyecto } from "./enum";


interface Proyecto{
    nombre:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    estado:Enum_estadoProyecto,
    fase:Enum_faseProyecto,
    lider:Schema.Types.ObjectId,
}

const proyectoSchema = new Schema<Proyecto>({
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
    }
})
