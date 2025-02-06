import express from 'express';
import { chatController } from '../controllers/chat.controller.js';
import { protect } from '../common/middlewares/protect.middleware.js';

const chatRouter = express.Router();

// Tạo route CRUD
chatRouter.post('/', chatController.create);
chatRouter.get('/', chatController.findAll);
chatRouter.get('/list-user-chat', protect, chatController.listUserChat);
chatRouter.get('/detail/:id', chatController.findOne);
chatRouter.patch('/:id', chatController.update);
chatRouter.delete('/:id', chatController.remove);

export default chatRouter;