import {Schema,model} from 'mongoose'
import { Enum_tipoObjetivo } from '../enums/enum';
import { ProyectoModel } from '../proyecto/proyecto';

interface Objetivo{
    descripcion:string,
    tipo:Enum_tipoObjetivo,
    proyecto:Schema.Types.ObjectId
}

const objetivoSchema = new Schema<Objetivo>({
    descripcion:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        enum:Enum_tipoObjetivo,
        required:true
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProyectoModel
    }
})

export const ObjetiveModel = model("Objetive",objetivoSchema,"objetivos")