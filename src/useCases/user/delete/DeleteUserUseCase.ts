import { UserRepository } from 'src/repositories/user/UserRepository';
import { IBaseUseCase } from 'src/providers/structuralBone/IBaseUseCase';

class DeleteUserUseCase implements IBaseUseCase {
    
    constructor(private userRepository: UserRepository) {} 

    async execute(id: string): Promise<void | any> {
        
        try {
            const userExist = await this.userRepository.findById(id);
            if (userExist) {
                await this.userRepository.delete(userExist);
            }
        } catch (error) {
            return error.message;
        }
    }

}

export { DeleteUserUseCase };