import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { PlatformApiModule } from './api/platform-api.module';

@Module({
  imports: [PrismaModule, PlatformApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
