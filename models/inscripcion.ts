import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "./enum";
import { ProyectoModel } from "./proyecto";
import { UserModel } from "./usuarios";

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
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
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


