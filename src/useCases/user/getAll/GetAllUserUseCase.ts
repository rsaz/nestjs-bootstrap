import { UserRepository } from 'src/repositories/user/UserRepository';
import { Injectable } from "@nestjs/common";
import { User } from 'src/entities/User';

@Injectable()
class GetAllUserUseCase {

    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.all();
    }
}

export { GetAllUserUseCase };