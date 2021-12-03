import { InscripcionModel } from "./inscripcion";

export const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscripcionModel.find();
      return inscripciones;      
    },
    
   
  Mutation: {
    crearInscripcion: async (parents, args) => {
      const inscripcion = await InscripcionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcion;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(
        args.id,
        {
          estado: 'ACEPTADO',
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return inscripcionAprobada;

    },
  },
};
