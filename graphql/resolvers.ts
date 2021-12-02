import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversAvance } from "../models/avance/resolvers";
import {resolverObjetivo} from "../models/objetivo/resolvers";
import { resolversUsuario } from "../models/usuario/resolvers";
//AQUI VAN LAS IMPORTACIONES DE TODOS LOS RESOLVERS DE LOS ESQUEMAS QUE DEBE CREAR CADA INTEGRANTE DEL GRUPO

export const resolvers = [resolversAvance,resolversProyecto,resolverObjetivo,resolversUsuario];
