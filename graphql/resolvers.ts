import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversAvance } from "../models/avance/resolvers";
//AQUI VAN LAS IMPORTACIONES DE TODOS LOS RESOLVERS DE LOS ESQUEMAS QUE DEBE CREAR CADA INTEGRANTE DEL GRUPO

export const resolvers = [resolversAvance,resolversProyecto];
