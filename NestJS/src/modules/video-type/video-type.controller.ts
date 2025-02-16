import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoTypeService } from './video-type.service';
import { CreateVideoTypeDto } from './dto/create-video-type.dto';
import { UpdateVideoTypeDto } from './dto/update-video-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('VideoTypes')
@Controller('video-type')
export class VideoTypeController {
  constructor(private readonly videoTypeService: VideoTypeService) {}

  @Post()
  async create(@Body() createVideoTypeDto: CreateVideoTypeDto) {
    return await this.videoTypeService.create(createVideoTypeDto);
  }

  @Get()
  findAll() {
    return this.videoTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideoTypeDto: UpdateVideoTypeDto,
  ) {
    return this.videoTypeService.update(+id, updateVideoTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoTypeService.remove(+id);
  }
}
