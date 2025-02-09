import { Server } from "socket.io";
import handleChatSokcet from "./chat.socket.js";
import handleNotificationSocket from "./notification.js";

const initSocket = (httpServer) => { 
   const io = new Server(httpServer, {
      /* options */
   });

   io.on("connection", (socket) => {
      console.log(`id: ${socket.id}`);
   
      handleChatSokcet(io, socket)

      handleNotificationSocket(io, socket)
   });
 }


export default initSocket