import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {

    return jwt.sign(payload, 'secret', {
        expiresIn: '24h'
    })

}

export const validarToken = (token) => {

    if (token) {
        const verificacion = jwt.verify(token, 'secret', (err, data) => {
            if (data) return {
                data:data
            };
            if(err) return {
                error:err
            }
        })
        return verificacion;
    }

}