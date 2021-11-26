import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types";
import { tiposProyecto } from "../models/proyecto/tipos";
import { tiposUsuario } from "../models/usuario/tipos";
import { tiposAvance } from "../models/avance/tipos";
import { tiposObjetivo } from "../models/objetivo/tipos";
import { tiposInscripcion } from "../models/inscripcion/tipos";
import { tiposAutenticacion } from "./auth/tipos";

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [tiposGlobales,tiposEnums,tiposProyecto,tiposUsuario,tiposAvance,tiposObjetivo,tiposInscripcion,tiposAutenticacion]



