import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversAvance } from "../models/avance/resolvers";
import {resolverObjetivo} from "../models/objetivo/resolvers";
//AQUI VAN LAS IMPORTACIONES DE TODOS LOS RESOLVERS DE LOS ESQUEMAS QUE DEBE CREAR CADA INTEGRANTE DEL GRUPO

export const resolvers = [resolversAvance,resolversProyecto,resolverObjetivo];

