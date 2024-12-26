import { responseSuccess } from "../common/helpers/reposonse.helper.js";
import videoService from "../services/video.service.js";

const videoController = {
   videoList: async (req, res, next) => {
      try {
         const videos = await videoService.videoList(req);
         const resData = responseSuccess(videos, `Get List Videos Successfully`, 200);
         res.status(resData.code).json(resData);
      } catch (error) {
         next(error);
      }
   },
};

export default videoController;
