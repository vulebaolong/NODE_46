import { responseSuccess } from "../common/helpers/reposonse.helper.js";
import videoService from "../services/video.service.js";

const videoController = {
   videoList: async (req, res, next) => {
      const videos = await videoService.videoList();

      const resData = responseSuccess(videos, `Get List Videos Successfully`, 200);

      res.status(resData.code).json(resData);
   },
};

export default videoController;
