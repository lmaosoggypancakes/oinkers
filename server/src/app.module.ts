import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ApiModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
