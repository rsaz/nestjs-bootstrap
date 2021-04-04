import { Injectable } from "@nestjs/common";
import { IBaseUseCase } from "src/providers/structuralBone/IBaseUseCase";
import { UserRepository } from "src/repositories/user/UserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

@Injectable()
class CreateUserUseCase implements IBaseUseCase{
    constructor(private userRepository: UserRepository){}

    async execute(createUserDTO: CreateUserDTO): Promise<void | any>{
        
        try {
            this.userRepository.create(createUserDTO);
        } catch (error) {
            return error.message;
        }
    } 
}

export {CreateUserUseCase};