const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');

describe('Transferências', () => {
    describe('POST /transferencias', () => {
    let token;
    
        beforeEach( async () => {
            token = await obterToken('julio.lima', '123456');
        });

        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou maior que R$10,00', async () => {
        //aqui dentro do it eu faço o teste com o supertest.
                const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                });
            
              expect(resposta.status).to.equal(201);

              console.log(resposta.body);
              

        });
        it('Deve retornar falha com 422 quando o valor da transferência for abaixo que R$10,00', async () => {
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9.99,
                    token: ""
                });
            
              expect(resposta.status).to.equal(422);

              console.log(resposta.body);



        });

    });

});