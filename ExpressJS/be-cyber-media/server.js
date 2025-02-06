import express from "express";
import rootRouter from "./src/routes/root.router.js";
import { responseError } from "./src/common/helpers/reposonse.helper.js";
import { handleError } from "./src/common/helpers/error.helper.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import prisma from "./src/common/prisma/init.prisma.js";

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json());
app.use(
   cors({
      origin: ["http://localhost:5173", "google.com"],
   })
);

app.use(rootRouter);

app.use(handleError);

const httpServer = createServer(app);

const io = new Server(httpServer, {
   /* options */
});

io.on("connection", (socket) => {
   console.log(`id: ${socket.id}`);

   socket.on("join-room", (data) => {
      console.log("join-room", { data });
      const { user_id_sender, user_id_recipient } = data;
      //   tạo roomID: sắp xếp 2 id lại với nhau
      const roomId = [user_id_sender, user_id_recipient].sort((a, b) => a - b).join("_");

      //   Đảm bảo thoát hết room trước khi join room
      socket.rooms.forEach((roomId) => {
         socket.leave(roomId);
      });

      socket.join(roomId);
   });

   socket.on("send-message", async (data) => {
      console.log({ data });
      const { message, user_id_sender, user_id_recipient } = data;
      const roomId = [user_id_sender, user_id_recipient].sort((a, b) => a - b).join("_");
      io.to(roomId).emit("receive-message", data);

      await prisma.chats.create({
         data: {
            message: message,
            user_id_sender: user_id_sender,
            user_id_recipient: user_id_recipient,
         },
      });
   });

   //    Nên lấy danh sách message khởi tạo ban đầu bằng API
   //    Không nên dùng bằng socket như phía dưới
   socket.on("get-list-message", async (data) => {
      console.log("get-list-message", { data });
      const { user_id_sender, user_id_recipient } = data;

      const chats = await prisma.chats.findMany({
         where: {
            OR: [
               // lấy tin nhắn của mình
               {
                  user_id_recipient: user_id_recipient,
                  user_id_sender: user_id_sender,
               },
               //    Lấy tin nhắn của đối phương
               {
                  user_id_recipient: user_id_sender,
                  user_id_sender: user_id_recipient,
               },
            ],
         },
      });

      socket.emit("get-list-message", chats);
   });
});

httpServer.listen(3069, () => {
   console.log(`Server Online At Port 3069`);
});

/**
 * tự động lưu token ở POSTMAN
 
const response = pm.response.json()

if(response.status === `error`) return

const accessToken = response.metaData.accessToken
const refreshToken = response.metaData.refreshToken

pm.globals.set("accessToken", accessToken);
pm.globals.set("refreshToken", refreshToken);

 */

// console.log({ env: process.env });

/**
 * PRISMA
 *    - npm i prisma
 *    - npm i @prisma/client
 *
 *    - npx prisma init: khởi tạo prisma
 *       - tạo ra .env
 *       - tạo ra prisma/schema.prisma
 *
 *    - npx prisma db pull
 *    - npx prisma generate
 *
 * *** Cập nhật lại DB
 *    prisma: chỉ cần chạy 2 câu lệnh sau:
 *       npx prisma db pull
 *       npx prisma generate
 *
 *    sequelize:
 *       npx sequelize-auto -h localhost -d db_cyber_media -u root -x 1234 -p 3307  --dialect mysql -o src/models -a src/models/additional.json -l esm
 */

// app.use(
//    (req, res, next) => {
//       console.log(`middleware 1`);
//       const payload = `payload`;
//       res.payload = payload;
//       next(123);
//    },
//    (req, res, next) => {
//       console.log(`middleware 2`);
//       console.log(res.payload);
//       next();
//    },
//    (req, res, next) => {
//       console.log(`middleware 3`);
//       next();
//    },
//    (err, req, res, next) => {
//       const resData = responseError(err.message, err.code, err.stack);
//       res.status(resData.code).json(resData);
//    }
// );

/**
 * Code first
 * Đi từ code tạo ra table
 *    tạo table bằng code javascript
 */
/**
 * Database first
 * Đi từ câu lệnh SQL để tạo ra table
 *    - tạo table bằng câu lệnh SQL
 *    - sequelize-auto
 *    - npm i sequelize-auto
 *
 *    - npx sequelize-auto -h localhost -d db_cyber_media -u root -x 1234 -p 3307  --dialect mysql -o src/models -a src/models/additional.json -l esm
 */
// /**
//  * Body
//  * để nhận được dữ liệu từ body bắt buộc phải có
//  *    - app.use(express.json())
//  *    - hoặc sử dụng thư viện parser: https://www.npmjs.com/package/parser
//  */
// app.post(`/body`, (request, response, next) => {
//    console.log(request.body);
//    response.json(`Body Parameters`);
// });

// /**
//  * Query Parameters
//  * Thường dùng: khi muốn phân trang, search, filter
//  */
// app.get(`/query`, (request, response, next) => {
//    console.log(request.query);

//    const { email, password } = request.query;

//    console.log(email, password);

//    response.json(`Query Parameters`);
// });

// /**
//  * Path Parameters
//  * Thường dùng: khi muốn lấy chi tiết (detail) của một user, product, ....
//  */
// app.get(`/path/:id`, (request, response, next) => {
//    console.log(request.params);
//    response.json(`Path Parameters`);
// });

// /**
//  * Headers
//  */
// app.get(`/headers`, (request, response, next) => {
//    console.log(request.headers);
//    response.json(`Header Parameters`);
// });

/*

    // BE - ExpressJS CURD
    // Routes
    "Express CRUD Routes": {
      "scope": "javascript, javascriptreact, typescriptreact, typescript",
      "prefix": "express-router-crud",
      "body": [
          "import express from 'express';",
          "",
          "const ${1:module}Router = express.Router();",
          "",
          "// Tạo route CRUD",
          "${1:module}Router.post('/', ${1:module}Controller.create);",
          "${1:module}Router.get('/', ${1:module}Controller.findAll);",
          "${1:module}Router.get('/:id', ${1:module}Controller.findOne);",
          "${1:module}Router.patch('/:id', ${1:module}Controller.update);",
          "${1:module}Router.delete('/:id', ${1:module}Controller.remove);",
          "",
          "export default ${1:module}Router;"
      ],
      "description": "Snippet for Express CRUD routes"
  },
  "Express CRUD Controller": {
      "scope": "javascript, javascriptreact, typescriptreact, typescript",
      "prefix": "express-controller-crud",
      "body": [
          "export const ${1:module}Controller = {",
          "   create: async function (req, res, next) {",
          "      try {",
          "         const result = await ${2:${1:module}Service}.create(req);",
          "         const response = ${3:responseSuccess}(result, `Create ${1:module} successfully`);",
          "         res.status(response.code).json(response);",
          "      } catch (err) {",
          "         next(err);",
          "      }",
          "   },",
          "",
          "   findAll: async function (req, res, next) {",
          "      try {",
          "         const result = await ${1:module}Service.findAll(req);",
          "         const response = responseSuccess(result, `Get all ${1:module}s successfully`);",
          "         res.status(response.code).json(response);",
          "      } catch (err) {",
          "         next(err);",
          "      }",
          "   },",
          "",
          "   findOne: async function (req, res, next) {",
          "      try {",
          "         const result = await ${1:module}Service.findOne(req);",
          "         const response = responseSuccess(result, `Get ${1:module} #${req.params.id} successfully`);",
          "         res.status(response.code).json(response);",
          "      } catch (err) {",
          "         next(err);",
          "      }",
          "   },",
          "",
          "   update: async function (req, res, next) {",
          "      try {",
          "         const result = await ${1:module}Service.update(req);",
          "         const response = responseSuccess(result, `Update ${1:module} #${req.params.id} successfully`);",
          "         res.status(response.code).json(response);",
          "      } catch (err) {",
          "         next(err);",
          "      }",
          "   },",
          "",
          "   remove: async function (req, res, next) {",
          "      try {",
          "         const result = await ${1:module}Service.remove(req);",
          "         const response = responseSuccess(result, `Remove ${1:module} #${req.params.id} successfully`);",
          "         res.status(response.code).json(response);",
          "      } catch (err) {",
          "         next(err);",
          "      }",
          "   }",
          "};"
      ],
      "description": "Snippet for Express CRUD controller"
  },
  "Express CRUD Service": {
      "scope": "javascript, javascriptreact, typescriptreact, typescript",
      "prefix": "express-service-crud",
      "body": [
          "export const ${1:module}Service = {",
          "   create: async function (req) {",
          "      return `This action create`;",
          "   },",
          "",
          "   findAll: async function (req) {",
          "      return `This action returns all ${1:module}`;",
          "   },",
          "",
          "   findOne: async function (req) {",
          "      return `This action returns a id: ${req.params.id} ${1:module}`;",
          "   },",
          "",
          "   update: async function (req) {",
          "      return `This action updates a id: ${req.params.id} ${1:module}`;",
          "   },",
          "",
          "   remove: async function (req) {",
          "      return `This action removes a id: ${req.params.id} ${1:module}`;",
          "   },",
          "};"
      ],
      "description": "Snippet for Express CRUD service"
  }

  */
