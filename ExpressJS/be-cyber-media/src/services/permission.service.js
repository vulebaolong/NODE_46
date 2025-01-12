import prisma from "../common/prisma/init.prisma.js";
import _ from "lodash";

export const permissionService = {
   create: async function (req) {
      return `This action create`;
   },

   findAll: async function (req) {
      return `This action returns all permission`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} permission`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} permission`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} permission`;
   },

   groupByModule: async function (req) {
      const { id } = req.params;

      // lấy ra tất cả các permission từ bảng "role_permission"
      const permission = await prisma.permissions.findMany({
         include: {
            role_permissions: {
               where: {
                  role_id: +id,
                  is_active: true,
               },
            },
         },
      });

      console.log({ permission });

      const result = _.groupBy(permission, "module");

      console.log({ result });

      return result;
   },
};
