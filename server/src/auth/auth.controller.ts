import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService){}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        // passport automatically injects the user into the req.user
        return this.auth.login(req.user) 
    }
}
