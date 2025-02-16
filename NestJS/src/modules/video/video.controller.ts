import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import VideoService from './video.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TokenCheck } from '../auth/token/token-check';
import { Request } from 'express';
import { Public } from 'src/common/decorators/is-public.decorator';

@Controller(`video`)
export default class VideoController {
  constructor(protected videoService: VideoService) {}

  @Get(`video-list`)
  @ApiBearerAuth()
  async getListVideo(
    @Query()
    query: any,
    @Query(`page`)
    page: string,
    @Query(`pageSize`)
    pageSize: string,
    @Req()
    req: Request,
  ) {
    const result = await this.videoService.getListVideo(req, query);
    return result;
  }

  @Get(`video-detail/:id`)
  async videoDetail(
    @Param()
    param: any,
    @Param(`id`)
    id: string,
    @Headers()
    headers: any,
  ) {
    // console.log({ param, id });
    console.log({ headers });

    return await this.videoService.videoDetail(id);
  }

  @Post(`video-create`)
  async createVideo(
    @Body()
    body: any,
  ) {
    console.log({ body });
    return `createVideo`;
  }
}
