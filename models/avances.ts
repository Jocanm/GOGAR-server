import { Schema,model } from "mongoose";
import { ProyectoModel } from './proyecto';
import { UserModel } from './usuario';

interface Avance{
    fecha: Date,
    descripcion: string,
    observaciones: [string],
    proyecto: Schema.Types.ObjectId,
    creadoPor: Schema.Types.ObjectId,
}

const avancesSchema = new Schema <Avance>({
    fecha:{
        type:Date,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    observaciones:[
        {
        type:String,
        },
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: ProyectoModel,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required:true,
    },
});

export const AvancesModel = model('Avance', avancesSchema, "avances");
