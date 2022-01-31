import { User } from '../models/User'

// Cria interfece nesse objeto
export class  UsersRepository {
    findByEmail(email){
        if(!User){
            return Promise(User)
        }

    }
    save(user){
    }
}