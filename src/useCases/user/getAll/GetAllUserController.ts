import { Controller, Get } from "@nestjs/common";
import { User } from "src/entities/User";
import { GetAllUserUseCase } from "./GetAllUserUseCase";

@Controller('/user')
class GetAllUserController {

    constructor(private getAllUserUseCase: GetAllUserUseCase) {}

    @Get()
    async execute(): Promise<User[]> {
        return this.getAllUserUseCase.execute();
    }
}

export { GetAllUserController };