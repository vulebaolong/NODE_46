import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import uploadLocal from 'src/common/multer/local.multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileUploadDto } from './dto/file-upload.dto';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @UseInterceptors(FileInterceptor('avatar', uploadLocal))
  // https://docs.nestjs.com/openapi/operations#file-upload
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  @Post(`avatar-local`)
  async avatarLocal(@UploadedFile() file) {
    return await this.userService.avatarLocal(file);
  }

  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  @Post(`avatar-cloud`)
  async avatarCloud(@UploadedFile() file) {
    return await this.userService.avatarCloud(file);
  }
}
