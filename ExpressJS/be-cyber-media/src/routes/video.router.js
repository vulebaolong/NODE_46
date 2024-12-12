import express from 'express'
import models from '../common/sequelize/init.sequelize.js';

const videoRouter = express.Router()

videoRouter.get('/video-list', async (req, res, next) => {
   const videos = await models.videos.findAll({ raw: true });
 
    res.json(videos);
 })


export default videoRouter