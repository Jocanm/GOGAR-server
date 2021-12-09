import { Enum_estadoProyecto, Enum_faseProyecto } from "../enums/enums";
import { ProjectModel } from "./project";

export const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            return await ProjectModel.find().populate("lider").populate("avances").populate("objetivos").populate({
                path: "inscripciones",
                populate: {
                    path: "estudiante"
                }
            })
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne({ _id: args._id }).populate("lider").populate("avances").populate("objetivos").populate("inscripciones")
            return proyecto
        }
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyecto = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider
            })

            return proyecto;
        },
        aprobarProyecto: async (parent, args) => {

            const project = await ProjectModel.findOne({ _id: args._id })

            if (project.fase === Enum_faseProyecto.NULA) {
                return await ProjectModel.findByIdAndUpdate(args._id, {
                    estado: Enum_estadoProyecto.ACTIVO,
                    fechaInicio: new Date(Date.now()),
                    fase: Enum_faseProyecto.INICIADO
                }, { new: true })
            }

            else {
                return await ProjectModel.findByIdAndUpdate(args._id, {
                    estado: Enum_estadoProyecto.ACTIVO,
                    fechaInicio: new Date(Date.now())
                }, { new: true })
            }

        },
        inactivarProyecto: async (parent, args) => {
            return await ProjectModel.findByIdAndUpdate(args._id, {
                estado: Enum_estadoProyecto.INACTIVO
            }, { new: true })
        },
        terminarProyecto: async (parent, args) => {
            return await ProjectModel.findByIdAndUpdate(args._id, {
                fase: Enum_faseProyecto.TERMINADO,
                estado: Enum_estadoProyecto.INACTIVO,
                fechaFin: new Date(Date.now())
            }, { new: true })
        },
        actualizarProyecto: async (parent, args) => {
            return await ProjectModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                presupuesto: args.presupuesto
            }, { new: true })
        }

    }
}