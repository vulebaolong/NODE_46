import { BadRequestException } from "../common/helpers/error.helper.js";
import Cars from "../models/Cars.model.js";

const carService = {
   carList: async (req) => {


      // Lỗi kiểm soát được
      // 400, 403, 401
      const passNguoiDungGuiLen = 123
      const passLayTrongDb = 1235

      if(passNguoiDungGuiLen !== passLayTrongDb) {
         throw new BadRequestException(`Mật khẩu không chính xác`)
      }

      // Lỗi không kiểm soát được
      // mã code: 500
      // abc


      // const cars = await sequelize.query(`SELECT * FROM cars`);
      const { page } = req.query;
      console.log(+page);

      const cars = await Cars.findAll({ raw: true });

      return cars;
   },
};

export default carService;
