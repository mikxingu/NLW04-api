import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {

    /**
     * Route Params = Parametros que compoe a rota
     * Exemplo: routes.get("/answers/:valor/:nota/:opcao")
     * 
     * Query Params = Parametros não obrigatorios
     * Envolvem Parametros que são consultados no banco de dados
     * sempre vêm depois do "?" na rota
     * chave=valor
     * 
     * 
     */

    async execute(request: Request, response: Response) {

        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if (!surveyUser) {
            throw new AppError("Survey User does not exists!")
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);

    }

}

export { AnswerController }