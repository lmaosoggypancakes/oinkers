import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { ApiService } from 'src/api/api.service';
import { ApiModule } from 'src/api/api.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ApiModule],
  providers: [AuthService, LocalStrategy, ApiService, PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}