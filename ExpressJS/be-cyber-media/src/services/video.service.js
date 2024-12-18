import { PrismaClient } from "@prisma/client";
import { BadRequestException } from "../common/helpers/error.helper.js";
import models from "../common/sequelize/init.sequelize.js";

const prisma = new PrismaClient();

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
