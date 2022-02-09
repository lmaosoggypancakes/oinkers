import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { isValid } from 'src/util';
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
    constructor(private api: ApiService, private jwt: JwtService){}

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.api.getUser({
            username: username
        })
        if (user && await isValid(password, user.password)) {
            return user
        }
        return null
    }

    async login(user: any) {
        return {
            access_token: this.jwt.sign(user)
        }
    }
}
