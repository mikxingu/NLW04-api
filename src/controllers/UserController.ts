import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {

    async create(request: Request, response: Response){
        const { name, email } = request.body;
        
        const usersRepository = getRepository(User);


        // VALIDA SE JÁ EXISTE UM EMAIL CADASTRADO NA DATABASE
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            return response.status(400).json({
                error: "User with informed e-mail already exists!"
            })
        }

        const user = usersRepository.create({
            name, email
        })
        

        await usersRepository.save(user);


        return response.json(user);

    }

}

export { UserController };