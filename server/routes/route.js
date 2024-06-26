import express from 'express';
import { addUser , getUser } from '../controllers/user-controller.js';
import { getConversationFromDB, newConversation } from '../controllers/conversation-controller.js';
import { getMessage, saveMessage } from '../controllers/message-controller.js';
import { uploadFile,getImage } from '../controllers/image-controller.js';
import uploadFileMiddleware from '../utils/uploadFileMiddleware.js';


const route = express.Router();

route.post('/add',addUser)
route.get('/users',getUser)

route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversationFromDB)

route.post('/message/add',saveMessage)
route.get('/message/get',getMessage)

route.post('/file/upload',uploadFileMiddleware.single('file'),uploadFile)
route.get('/file/:filename',getImage)
export default route;