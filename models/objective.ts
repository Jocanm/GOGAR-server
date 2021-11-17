import {Schema,model} from 'mongoose';
import { Enum_tipoObjetivo } from "./enum";


interface Objetivo{
    _id: string,
    descripcion: string,
    tipo: Enum_tipoObjetivo,
    proyecto:Schema.Types.ObjectId,
}

const objetivoSchema = new Schema<Objetivo>({
    descripcion: {
        type:String,
        required: true,
    },
    tipo: {
        type:String,
        enum: Enum_tipoObjetivo,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        //ref: ProjectModel,
    },


})

export const ObjetivoModel = model ("Objetivo", objetivoSchema);