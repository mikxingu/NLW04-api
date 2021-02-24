import express, { response } from 'express';

const app = express();

/** METODOS HTTP - DEVEM SER UTILIZADOS CORRETAMENTE
 * GET => BUSCA INFORMACAO
 * POST => SALVA UMA INFORMACAO
 * PUT => ALTERA UMA INFORMACAO
 * DELETE => APAGA UMA INFOMACAO
 * PATCH => FAZ UMA ALTERACAO ESPECIFICA
 */

 /** APIs geramente recebem 2 parametros
  * 
  * 1- Rota(Recurso API, ou caminho da aplicacao)
  * 2- Request, response
  *  
  * 
  */

app.get("/", (request, response) => {
    return response.json({message: "Hello Word - NLW04"});
})

app.post("/", (request, response) => {
    return response.json({message: "Dados salvos com sucesso!"});
})

app.listen(3333, () => console.log("Server is up!"));