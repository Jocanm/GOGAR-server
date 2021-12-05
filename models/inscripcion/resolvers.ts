import { Enum_EstadoInscripcion } from "../enums/enum";
import { InscripcionModel } from "./inscripcion";

export const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscripcionModel.find().populate("estudiante").populate("proyecto");
      return inscripciones;
    }
  },

  Mutation: {
    crearInscripcion: async (parents, args) => {
      const inscripcion = await InscripcionModel.create({
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcion;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: new Date(Date.now()),
        },
        { new: true }
      );
      return inscripcionAprobada;

    },
  },
};
