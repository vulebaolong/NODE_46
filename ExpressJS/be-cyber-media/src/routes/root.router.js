import express from 'express'
import videoRouter from './video.router.js'
import carRouter from './car.router.js';

const rootRouter = express.Router()


rootRouter.get(`/`, (request, response, next) => {
   response.json(`ok`);
});

rootRouter.use('/video', videoRouter)
rootRouter.use(`/car`, carRouter)

export default rootRouter