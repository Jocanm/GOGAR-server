import conexionBD from "./db/db";
import { userModel } from "./models/user";

const main = async() =>{

    await conexionBD();

    await userModel.create({
        correo:"amjose09@gmail.com",
        identificacion:"123456",
        nombre:"Jose",
        apellido:"Angarita"
    })
    .then((user)=>{
        console.log("Usuario Creado: ", user)
    })
    .catch((err)=>{
        console.log("Error: ",err)
    })

}

main()
