import { BadRequestException } from "../common/helpers/error.helper.js";
import prisma from "../common/prisma/init.prisma.js";

const videoService = {
   videoList: async (req) => {
      let { page, pageSize, type_id, search } = req.query;
      page = +page > 0 ? +page : 1;
      pageSize = +pageSize > 0 ? +pageSize : 10;
      type_id = +type_id > 0 ? +type_id : 0;
      search = search || ``;

      console.log({ page, pageSize, type_id, search });

      const whereTypeId = type_id === 0 ? {} : { type_id: type_id };
      const whereSearch = search.trim() === `` ? {} : { video_name: { contains: search } };
      const where = { ...whereTypeId, ...whereSearch };

      // LIMIT 5 OFFSSET 5
      const skip = (page - 1) * pageSize;
      const totalItem = await prisma.videos.count({ where: where });
      const totalPage = Math.ceil(totalItem / pageSize);

      const videos = await prisma.videos.findMany({
         take: pageSize,
         skip: skip,

         orderBy: {
            created_at: `desc`, // sắp xếp giảm dần: đưa video mới nhất lên trên đầu
         },
         where: where,
      });

      return {
         page, // trang hiện tại
         pageSize, // kích thước item trong 1 page: 10 video trong một page
         totalPage, // tổng cộng bao nhiêu trang
         totalItem, // tổng cộng có bao nhiêu video
         items: videos || [],
      };
   },
   videoDetail: async (req) => {
      const { id } = req.params;
      if (!id) throw new BadRequestException(`Vui lòng cung cấp id của video`);

      const video = await prisma.videos.findUnique({
         where: {
            video_id: +id,
         },
      });

      return video
   },
};

export default videoService;
