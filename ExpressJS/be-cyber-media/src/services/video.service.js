import prisma from "../common/prisma/init.prisma.js";

const videoService = {
   videoList: async (req) => {
      // abc
      // throw new BadRequestException(`Lấy danh sách video không thành công`)
      // const videos = await models.videos.findAll({ raw: true });
      console.log({ userDayne: req.user });

      const videos = await prisma.videos.findMany();

      return {
         items: videos,
      };
   },
};

export default videoService;
