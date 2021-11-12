import { connect } from "mongoose";

const conexionBD = async() => {

    return await connect("mongodb+srv://admin:admin@gogardatabase.nfqou.mongodb.net/GogarDataBase?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Conexion exitosa");
    })
    .catch((err)=>{
        console.log("Error conectando a la bd: ", err);
    })

}

export default conexionBD