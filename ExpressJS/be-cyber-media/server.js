import express from "express";
import rootRouter from "./src/routes/root.router.js";
import { responseError } from "./src/common/helpers/reposonse.helper.js";
import { handleError } from "./src/common/helpers/error.helper.js";
import cors from 'cors'

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json());
app.use(cors({
   origin: ['http://localhost:5173', 'google.com']
}))

app.use(rootRouter);

app.use(handleError);


app.listen(3069, () => {
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
