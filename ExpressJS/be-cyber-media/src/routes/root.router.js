import express from 'express'
import videoRouter from './video.router.js'
import carRouter from './car.router.js';
import authRouter from './auth.router.js';
import roleRouter from './role.router.js';
import permissionRouter from './permission.router.js';

const rootRouter = express.Router()


rootRouter.get(`/`, (request, response, next) => {
   response.json(`ok`);
});

rootRouter.use('/video', videoRouter)
rootRouter.use(`/car`, carRouter)
rootRouter.use(`/auth`, authRouter)
rootRouter.use(`/role`, roleRouter)
rootRouter.use(`/permission`, permissionRouter)

export default rootRouter