import prisma from "../common/prisma/init.prisma.js";

const videoService = {
   videoList: async () => {
      // abc
      // throw new BadRequestException(`Lấy danh sách video không thành công`)
      // const videos = await models.videos.findAll({ raw: true });

      const videos = await prisma.videos.findMany();

      return videos;
   },
};

export default videoService;
