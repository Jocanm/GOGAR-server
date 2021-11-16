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
