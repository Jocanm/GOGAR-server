import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import conexionBD from "./db/db";
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from "./graphql/resolvers";
import {tipos} from './graphql/types'

dotenv.config()

const server = new ApolloServer({
    typeDefs:tipos,
    resolvers:resolvers
})

const app = express()
app.use(express.json())
app.use(cors())

app.listen({port:process.env.PORT || 4000},async()=>{
    await conexionBD()
    await server.start()

    server.applyMiddleware({app})
    console.log("Server listening on port 4000...")
})