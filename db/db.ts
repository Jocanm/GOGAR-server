import { connect } from "mongoose";

const conexionBD = async() => {

    return await connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Conexion exitosa");
    })
    .catch((err)=>{
        console.log("Error conectando a la bd: ", err);
    })

}

export default conexionBD
