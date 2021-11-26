import express from "express";
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import conexionBD from "./db/db";
import { resolvers } from "./graphql/resolvers";
import { tipos } from './graphql/types'
import { validarToken } from "./utils/tokenUtils";

dotenv.config();

const getUserData = (token) => {
    const verificacion = validarToken(token.split(" ")[1])
    if(verificacion.data){
        return verificacion.data;
    }
    else{
        return null;
    }
}

const server = new ApolloServer({

    typeDefs: tipos,
    resolvers: resolvers,
    context: ({req}) => { 
        const token = req.headers.authorization ?? null;
        if(token){
            const userData = getUserData(token);
            if(userData) return {userData}
            
        }
        return null
    }

})

const app = express();

app.use(express.json())
app.use(cors())

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await conexionBD()
    await server.start()

    server.applyMiddleware({ app })

    console.log("Server listening on port 4000...")

})
