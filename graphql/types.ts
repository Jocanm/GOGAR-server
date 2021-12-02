import {gql} from 'apollo-server-express'
import { tiposEnums } from '../models/enums/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';
import { tiposObjetivo } from '../models/objetivo/tipos';

const tiposGlobales = gql`

    scalar Date

`;
export const tipos = [tiposGlobales,tiposEnums, tiposAvance,tiposProyecto,tiposObjetivo]