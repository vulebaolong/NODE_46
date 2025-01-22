import express from "express";
import videoController from "../controllers/video.controller.js";
import { protect } from "../common/middlewares/protect.middleware.js";
import checkPermission from "../common/middlewares/check-permission.middleware.js";

const videoRouter = express.Router();

videoRouter.get("/video-list", protect, checkPermission, videoController.videoList);
videoRouter.get("/video-detail/:id", protect, videoController.videoDetail);

export default videoRouter;
