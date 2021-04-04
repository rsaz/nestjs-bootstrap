import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { IBaseController } from "src/providers/structuralBone/IBaseController";
import { CreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

@Controller('/user')
class CreateUserController implements IBaseController{
    
    constructor(private createUserUseCase: CreateUserUseCase) {}
    
    @Post()
    async implement(@Body() createUserDTO: CreateUserDTO): Promise<void | any> {
        try {
            return await this.createUserUseCase.execute(createUserDTO);
        } catch (error) {
            throw new HttpException('User could not be created', HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
}

export { CreateUserController };