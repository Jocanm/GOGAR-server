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
//mongodb+srv://admin:admin@gogardatabase.nfqou.mongodb.net/GogarDataBase?retryWrites=true&w=majority
//mongodb://daniel:cruzada9@cluster0-shard-00-00.klq1n.mongodb.net:27017,cluster0-shard-00-01.klq1n.mongodb.net:27017,cluster0-shard-00-02.klq1n.mongodb.net:27017/objetivos?ssl=true&replicaSet=atlas-s0fja6-shard-0&authSource=admin&retryWrites=true&w=majority
//mongodb://admin:admin@gogardatabase-shard-00-00.klq1n.mongodb.net:27017,cluster0-shard-00-01.klq1n.mongodb.net:27017,cluster0-shard-00-02.klq1n.mongodb.net:27017/GogarDataBase?ssl=true&replicaSet=atlas-s0fja6-shard-0&authSource=admin&retryWrites=true&w=majority