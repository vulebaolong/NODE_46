import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UserService {
  async avatarLocal(file) {
    console.log({ file });
    return `avatarLocal`;
  }

  async avatarCloud(file) {
    console.log({ file });
    // const file = req.file;

    if (!file) {
      throw new BadRequestException(
        `Vui Lòng gửi hình ảnh lên thông qua key file (from-data)`,
      );
    }
    // const userId = req.user.user_id;

    // Configuration
    cloudinary.config({
      cloud_name: 'vulebaolong',
      api_key: '375481467533217',
      api_secret: 'IdhzUoK7jRyQceWSIdUI2x86g24', // Click 'View API Keys' above to copy your API secret
    });

    const uploadResult: any = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ folder: 'images' }, (error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(file.buffer);
    });

    console.log({ uploadResult });

    // await prisma.users.update({
    //   where: {
    //     user_id: Number(userId),
    //   },
    //   data: {
    //     avatar: uploadResult.secure_url,
    //   },
    // });

    // Để cho FE show được hình cần đổi từ dòng 60 cloud_name: "vulebaolong" => tên `https://res.cloudinary.com/<TÊN CỦA CÁC BẠN>/image/upload/`
    // src/constant/app.constant.ts
    // export const BASE_DOMAIN_CLOUDINARY = `https://res.cloudinary.com/vulebaolong/image/upload/`;

    return {
      folder: uploadResult?.folder,
      filename: file.filename,
      imgUrl: uploadResult?.secure_url,
    };
  }
}
