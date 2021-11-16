export const resolvers = {

    Query:{
        Usuarios:async (oarent,args) =>{
            const usuarios = [
                {
                    "nombre":"Jose"
                },
            ]
            
            return usuarios;
        }
    }
}