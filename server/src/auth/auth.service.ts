import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { isValid } from 'src/util';
import { User } from '@prisma/client'
@Injectable()
export class AuthService {
    constructor(private api: ApiService){}

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.api.getUser({
            username: username
        })
        if (user && isValid(password, user.password)) {
            return user
        }
        return null
    }

}
