import express from "express";

const app = express();

// middleware giúp phân giải dữ liệu từ json sang đối tượng javascript
app.use(express.json())


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



app.listen(3069, () => {
   console.log(`Server Online At Port 3069`);
});
