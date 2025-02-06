import prisma from "../common/prisma/init.prisma.js";

export const chatService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all chat`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} chat`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} chat`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} chat`;
   },

   listUserChat: async (req) => {
      let { page, pageSize, search, notMe } = req.query;
      page = +page > 0 ? +page : 1;
      pageSize = +pageSize > 0 ? +pageSize : 10;
      search = search || ``;
      notMe = notMe === `true` ? true : false;

      const whereNotMe = notMe === true ? { user_id: { not: req.user.user_id } } : {};
      const whereSearch = search.trim() === `` ? {} : { email: { contains: search } };
      const where = { ...whereNotMe, ...whereSearch };

      // LIMIT 5 OFFSSET 5
      const skip = (page - 1) * pageSize;
      const totalItem = await prisma.users.count({ where: where });
      const totalPage = Math.ceil(totalItem / pageSize);

      const users = await prisma.users.findMany({
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
         items: users || [],
      };
   },
};
