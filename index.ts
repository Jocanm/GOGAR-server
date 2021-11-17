import conexionBD from "./db/db";
import { Enum_tipoObjetivo } from "./models/enum";
import { ObjetivoModel } from "./models/objective";

const main = async () =>{
    await conexionBD();

    // const object = await ObjetivoModel.create({
    //     descripcion = "Este es el objetivo General".
    //     tipo: Enum_tipoObjetivo.general,


    // })




}