import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolverUsuario } from "../models/usuario/resolvers";
import {resolversAvance} from '../models/avance/resolvers'
import { resolverObjetivo } from "../models/objetivo/resolvers";
import { resolverIncripcion } from "../models/inscripcion/resolvers";
import { resolversAutenticacion } from "./auth/resolvers";

export const resolvers = [
    resolverUsuario,
    resolversProyecto,
    resolversAvance,
    resolverObjetivo,
    resolverIncripcion,
    resolversAutenticacion
]
