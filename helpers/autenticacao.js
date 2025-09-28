const request = require('supertest');

const obterToken = async (usuario, senha) =>{
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('cotent-type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
        })
    
    return respostaLogin.body.token;
}

module.exports = { 
    obterToken 
}