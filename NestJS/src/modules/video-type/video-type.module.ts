import { Module } from '@nestjs/common';
import { VideoTypeService } from './video-type.service';
import { VideoTypeController } from './video-type.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [VideoTypeController],
  providers: [VideoTypeService, PrismaService],
})
export class VideoTypeModule {}
