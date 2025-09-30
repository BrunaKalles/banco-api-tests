const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {
    let token;
    
    beforeEach( async () => {
        token = await obterToken('julio.lima', '123456');
   
    });

    describe('POST /transferencias', () => {
    
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou maior que R$10,00', async () => {
        //aqui dentro do it eu faço o teste com o supertest.
            const bodyTransferencias = {...postTransferencias}; // utilizado para clocar o postTransferecnias no primeiro nivel
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/)
                .send(bodyTransferencias);
            
            expect(resposta.status).to.equal(201);

            console.log(resposta.body);
              

        });
        it('Deve retornar falha com 422 quando o valor da transferência for abaixo que R$10,00', async () => {
             const bodyTransferencias = {...postTransferencias};
             bodyTransferencias.valor = 9.99;

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/)
                .send(bodyTransferencias);
            
              expect(resposta.status).to.equal(422);

              console.log(resposta.body);



        });

    });

     describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferência contido no banco de dados quando o ID for válido', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/1')
                .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/);            ;

            
            expect(resposta.status).to.equal(200);
            expect(resposta.body.id).to.equal(1);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equal(1);
            expect(resposta.body.conta_destino_id).to.equal(2);
            expect(resposta.body.valor).to.equal(11.00);

            



        })


     });

      describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos qundo informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL) // o request é do supertest
            .get('/transferencias?pag=1&limite=10') // o get é do supertest
            .set('Authorization', `Bearer ${token}` /*'Bearer ' + token*/)
         
        
           expect(resposta.status).to.equal(200)
           expect(resposta.body.limit).to.equal(10)
           expect(resposta.body.transferencias).to.have.lengthOf(10);//quando tiver vetores (simbolo {}) vai usar o have
         

        })
    })
})