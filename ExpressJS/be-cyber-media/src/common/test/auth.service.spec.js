import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";
import authService from "../../services/auth.service.js";
import prisma from "../prisma/init.prisma.js";
import { REGEX_EMAIL } from "../constant/app.constant.js";

// describe: tiêu đề, gom nhóm các case (trường hợp)
// it: cụ thể một case

// beforeEach: chạy trước mỗi lần hàm IT chạy, thường dùng để khởi tạo dữ liệu đầu vào
// afterEach: chạy sau mỗi lần hàm IT chạy, thường dùng để làm mới lại dữ liệu

describe("Auth Service", () => {
   beforeEach(() => {
      // console.log(`beforeEach chạy`);
      jest.spyOn(prisma.users, `create`);
      jest.spyOn(prisma.users, `findFirst`);
   });
   afterEach(() => {
      // console.log(`afterEach chạy`);
      jest.restoreAllMocks();
   });

   it("Case 1: Trường hợp đăng ký thành công với thông tin hợp lệ", async () => {
      // console.log(`Case 1`);

      // giả lập dữ liệu đầu ra của 2 hàm findFirst và create VỚI TRƯỜNG HỢP THÔNG TIN HỢP LỆ
      await prisma.users.findFirst.mockResolvedValue(undefined);
      await prisma.users.create.mockResolvedValue({
         user_id: 14,
         email: "nguyenthitest@gmail.com",
         full_name: "nguyenthitest",
         avatar: null,
         goole_id: null,
         face_app_id: null,
         created_at: "2025-01-22T14:22:37.000Z",
         updated_at: "2025-01-22T14:22:37.000Z",
         role_id: 2,
      });

      const req = {
         body: {
            full_name: `nguyenthitest`,
            email: `nguyenthitest@gmail.com`,
            pass_word: `1234`,
         },
      };

      const userNew = await authService.register(req);
      console.log({ userNew });

      // Kiểm tra kết quả
      expect(userNew).not.toHaveProperty("pass_word"); // không được có key pass_word
      expect(typeof userNew.email).toBe("string"); // email phải là chuỗi
      expect(REGEX_EMAIL.test(userNew.email)).toBe(true); // email phải đúng định dạng
   });
   it("Case 2: Trường hợp đăng ký, email đã tồn tại, cần phải báo lỗi", () => {
      // console.log(`Case 2`);
      // throw new Error();
   });
});
