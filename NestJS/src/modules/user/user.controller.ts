import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import uploadLocal from 'src/common/multer/local.multer';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @UseInterceptors(FileInterceptor('avatar', uploadLocal))
  @Post(`avatar-local`)
  async avatarLocal(@UploadedFile() file) {
    return await this.userService.avatarLocal(file);
  }
}
