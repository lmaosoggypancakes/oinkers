import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { ApiService } from 'src/api/api.service';
import { ApiModule } from 'src/api/api.module';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [ApiModule, PassportModule, JwtModule.register({
    secret: new ConfigService().get<string>('JWT_SECRET'),
    signOptions: {
      expiresIn: '30d'
    }
  })],
  providers: [AuthService, LocalStrategy, ApiService, PrismaService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}