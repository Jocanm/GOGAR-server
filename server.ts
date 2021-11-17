import conexionBD from "./db/db"
import { Enum_tipoObjetivo } from "./models/enum";
import { ObjetivoModel } from "./models/objective";


const main = async() => {
    await conexionBD();

    const objetivoGeneral = await ObjetivoModel.create({
        descripcion : "Objetivo General",
        tipo: Enum_tipoObjetivo.general,
        //proyecto = proyectoCreado._id,

    }); 
    const objetivoEsoecifico1 = await ObjetivoModel.create({
        descripcion : "Objetivo Especifico 1",
        tipo: Enum_tipoObjetivo.especifico,
        //proyecto = proyectoCreado._id,

    }); 

    const objetivoEsoecifico2 = await ObjetivoModel.create({
        descripcion : "Objetivo Especifico 2",
        tipo: Enum_tipoObjetivo.especifico,
        //proyecto = proyectoCreado._id,

    }); 
    console.log('Objetivos Creados')

main();
}