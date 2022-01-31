import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
@Module({
  providers: [ApiService, PrismaService],
  controllers: [ApiController]
})
export class ApiModule {}
