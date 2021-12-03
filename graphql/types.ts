import {gql} from 'apollo-server-express'
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';
import { tiposObjetivo } from '../models/objetivo/tipos';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposEnums } from "../models/enums/tipos";
import { tiposInscripcion } from "../models/inscripcion/tipos";

const tiposGlobales = gql`
  scalar Date
`;
export const tipos = [tiposGlobales,tiposEnums, tiposProyecto,tiposUsuario,tiposAvance,tiposObjetivo,tiposInscripcion]
