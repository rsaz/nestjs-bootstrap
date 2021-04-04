import { v4 as uuidv4 } from 'uuid';

class User {
    public id?: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuidv4();            
        }
    }
}

export { User };