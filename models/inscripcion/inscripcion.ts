import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enum";
import { ProyectoModel } from "../proyecto/proyecto";
import { UserModel } from "../usuario/usuario";

interface Inscripcion {
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
  estado: Enum_EstadoInscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
}

const InscriptionSchema = new Schema<Inscripcion>({
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    default:Enum_EstadoInscripcion.PENDIENTE,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProyectoModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

export const InscripcionModel = model("Inscripcion", InscriptionSchema);


