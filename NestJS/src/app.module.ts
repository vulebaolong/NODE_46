import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import VideoModule from './modules/video/video.module';
import PrismaModule from './modules/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), VideoModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
