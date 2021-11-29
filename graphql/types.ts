import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/tipos";
import { tiposInscripcion } from "../models/inscripcion/tipos";

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposEnums, tiposInscripcion];
