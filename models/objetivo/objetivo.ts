import {Schema,model} from 'mongoose'
import { Enum_tipoObjetivo } from '../enums/enums';
import { ProjectModel } from '../proyecto/project';

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
        ref:ProjectModel
    }
})

export const ObjetiveModel = model("Objetive",objetivoSchema,"objetivos")