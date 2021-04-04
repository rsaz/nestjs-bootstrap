import { Injectable } from "@nestjs/common";
import { User } from "src/entities/User";

@Injectable()
class UserRepository {
    // add database connector here
    users:  User[] = [];

    async create(user: User): Promise<void> {
        // TODO: to insert the user class in the dependency injection system from Nestjs
        const userObj = new User(user);
        this.users.push(userObj);
    }

    async all(): Promise<User[]> {
        return this.users;
    }

    // BUG: Why is not deleting a user from the list
    async delete(user: User): Promise<void | any> {
        this.users = this.users.filter(u => u.id !== user.id);
        return this.users;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id) as User;
        return user;
    }
}

export { UserRepository };