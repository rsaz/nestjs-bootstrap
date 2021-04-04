import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { HttpException, HttpCode } from '@nestjs/common';
import { IBaseController } from 'src/providers/structuralBone/IBaseController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

@Controller('/user')
class DeleteUserController implements IBaseController{
    
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}
    
    @Delete(':id')
    async implement(@Param('id') id: string): Promise<any> {
        try {
            await this.deleteUserUseCase.execute(id);
        } catch (error) {
            throw new HttpException('User could not be deleted', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

export { DeleteUserController };