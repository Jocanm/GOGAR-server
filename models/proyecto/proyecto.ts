import { Schema, model } from "mongoose";
import { Enum_estadoProyecto, Enum_faseProyecto } from "../enums/enum";
import { UserModel } from '../usuario/usuario'


interface Proyecto {
    nombre: string,
    presupuesto: number,
    fechaInicio: Date,
    fechaFin: Date,
    estado: Enum_estadoProyecto,
    fase: Enum_faseProyecto,
    lider: Schema.Types.ObjectId,
}

const proyectoSchema = new Schema<Proyecto>(
    {
        nombre: {
            type: String,
            required: true
        },
        presupuesto: {
            type: Number,
            required: true
        },
        fechaInicio: {
            type: Date,
            required: true
        },
        fechaFin: {
            type: Date,
            required: true
        },
        estado: {
            type: String,
            enum: Enum_estadoProyecto,
            default: Enum_estadoProyecto.INACTIVO
        },
        fase: {
            type: String,
            enum: Enum_faseProyecto,
            default: Enum_faseProyecto.NULA
        },
        lider: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: UserModel
        }
    }
)

export const ProyectoModel = model('Proyecto', proyectoSchema, "proyectos");
