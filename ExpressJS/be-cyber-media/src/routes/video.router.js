import express from 'express'
import videoController from '../controllers/video.controller.js';

const videoRouter = express.Router()

videoRouter.get('/video-list', videoController.videoList)


export default videoRouter