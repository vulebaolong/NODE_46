import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async avatarLocal(file) {
    console.log({ file });
    return `avatarLocal`;
  }
}
