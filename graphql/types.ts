import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types";
import { tiposProyecto } from "../models/proyecto/tipos";
import { tiposUsuario } from "../models/usuario/tipos";
import { tiposAvance } from "../models/avance/tipos";

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [tiposGlobales,tiposEnums,tiposProyecto,tiposUsuario,tiposAvance]



