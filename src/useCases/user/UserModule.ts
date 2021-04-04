import { Module } from "@nestjs/common";
import { GetAllUserController } from 'src/useCases/user/getAll/GetAllUserController';
import { GetAllUserUseCase } from 'src/useCases/user/getAll/GetAllUserUseCase';
import { CreateUserController } from './create/CreateUserController';
import { CreateUserUseCase } from './create/CreateUserUseCase';
import { UserRepository } from 'src/repositories/user/UserRepository';
import { DeleteUserController } from "./delete/DeleteUserController";
import { DeleteUserUseCase } from "./delete/DeleteUserUseCase";

@Module({
    imports: [],
    controllers: [CreateUserController, GetAllUserController, DeleteUserController],
    providers: [UserRepository, CreateUserUseCase, GetAllUserUseCase, DeleteUserUseCase]
})

export class UserModule {}