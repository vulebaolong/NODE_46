import express from "express";
import { DataTypes, Sequelize } from "sequelize";

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json());

/**
 * Body
 * để nhận được dữ liệu từ body bắt buộc phải có
 *    - app.use(express.json())
 *    - hoặc sử dụng thư viện parser: https://www.npmjs.com/package/parser
 */
app.post(`/body`, (request, response, next) => {
   console.log(request.body);
   response.json(`Body Parameters`);
});

app.get(`/`, (request, response, next) => {
   console.log(`123`);
   response.json(`hello world`);
});

/**
 * Query Parameters
 * Thường dùng: khi muốn phân trang, search, filter
 */
app.get(`/query`, (request, response, next) => {
   console.log(request.query);

   const { email, password } = request.query;

   console.log(email, password);

   response.json(`Query Parameters`);
});

/**
 * Path Parameters
 * Thường dùng: khi muốn lấy chi tiết (detail) của một user, product, ....
 */
app.get(`/path/:id`, (request, response, next) => {
   console.log(request.params);
   response.json(`Path Parameters`);
});

/**
 * Headers
 */
app.get(`/headers`, (request, response, next) => {
   console.log(request.headers);
   response.json(`Header Parameters`);
});

const sequelize = new Sequelize("mysql://root:1234@localhost:3307/db_cyber_media");

// Kiểm tra kết nối với cở sở dữ liệu (db)
sequelize
   .authenticate()
   .then(() => {
      console.log(`Kết nối với db thành công`);
   })
   .catch(() => {
      console.log(`Kết nối với db KHÔNG thành công`);
   });

// try {
//    await sequelize.authenticate();
//    console.log(`Kết nối với db thành công`);
// } catch (error) {
//    console.log(`Kết nối với db KHÔNG thành công`);
// }

/**
 * Code first
 * Đi từ code tạo ra table
 *    tạo table bằng code javascript
 */
// tạo ra model từ define
const Cars = sequelize.define(
   "Cars",
   {
      car_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
      },
      description: {
         type: DataTypes.TEXT,
      },
      passengers: {
         type: DataTypes.INTEGER,
      },
      max_speed: {
         type: DataTypes.STRING,
      },
      gearbox_type: {
         type: DataTypes.STRING,
      },
      fuel_type: {
         type: DataTypes.STRING,
      },
      price_per_day: {
         type: DataTypes.DOUBLE,
      },
      discount_percentage: {
         type: DataTypes.INTEGER,
         defaultValue: 0,
      },
      image_url: {
         type: DataTypes.STRING,
      },
      created_at: {
         type: DataTypes.DATE,
      },
      updated_at: {
         type: DataTypes.DATE,
      },
   },
   {
      tableName: `cars`,
      timestamps: false,
   }
);
Cars.sync()
   .then(() => {
      console.log(`Đồng bộ table cars thành công`);
   })
   .catch(() => {
      console.log(`Đồng bộ table cars KHÔNG thành công`);
   });

app.get(`/cars`, async (req, res, next) => {
   // const cars = await sequelize.query(`SELECT * FROM cars`);

   const cars = await Cars.findAll({ raw: true });
   console.log({ cars });

   // console.log({ cars });
   // console.log(`cars - 1`, cars[0]);
   // // console.log(`cars`, cars);

   res.json(cars);
});

/**
 * Database first
 * Đi từ câu lệnh SQL để tạo ra table
 *    - tạo table bằng câu lệnh SQL
 */

app.listen(3069, () => {
   console.log(`Server Online At Port 3069`);
});
