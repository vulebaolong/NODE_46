import { responseSuccess } from "../common/helpers/reposonse.helper.js";
import authService from "../services/auth.service.js";

const authControler = {
   register:  async (req, res, next) => {
      try {
         const userNew = await authService.register(req);
         const resData = responseSuccess(userNew, `Register Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         next(error)
      }
   },
   login:  async (req, res, next) => {
      try {
         const data = await authService.login(req);
         const resData = responseSuccess(data, `Login Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         next(error)
      }
   },
   facebookLogin:  async (req, res, next) => {
      try {
         const data = await authService.facebookLogin(req);
         const resData = responseSuccess(data, `Login Facebook Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         next(error)
      }
   },
   refreshToken:  async (req, res, next) => {
      try {
         const data = await authService.refreshToken(req);
         const resData = responseSuccess(data, `Refresh Token Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         console.log({error});
         next(error)
      }
   },
   getInfo:  async (req, res, next) => {
      try {
         const data = await authService.getInfo(req);
         const resData = responseSuccess(data, `Get Info Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         console.log({error});
         next(error)
      }
   },
}

export default authControler