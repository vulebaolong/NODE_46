import { responseError, responseSuccess } from "../common/helpers/reposonse.helper.js";
import carService from "../services/car.service.js";

const carController = {
   carList: async (req, res, next) => {
      try {
         const cars = await carService.carList(req);
         const resData = responseSuccess(cars, `Get List Car Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         next(error)
      }
   },
};

export default carController;
