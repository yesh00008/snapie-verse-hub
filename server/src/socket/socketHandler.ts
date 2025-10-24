import { Server, Socket } from 'socket.io';

interface ConnectedUser {
  userId: string;
  socketId: string;
  phone?: string;
}

const connectedUsers = new Map<string, ConnectedUser>();

export const initializeSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`👤 User connected: ${socket.id}`);

    // Handle user joining
    socket.on('join', (userData: { userId: string; phone?: string }) => {
      connectedUsers.set(userData.userId, {
        userId: userData.userId,
        socketId: socket.id,
        phone: userData.phone
      });
      
      socket.join(userData.userId);
      console.log(`✅ User ${userData.userId} joined`);
    });

    // Handle sending messages
    socket.on('send_message', (messageData: {
      senderId: string;
      receiverId: string;
      message: string;
      type: 'text' | 'image' | 'audio' | 'video';
      timestamp: Date;
    }) => {
      // Emit to receiver if online
      const receiver = connectedUsers.get(messageData.receiverId);
      if (receiver) {
        io.to(receiver.socketId).emit('receive_message', messageData);
      }
      
      // Also emit back to sender for confirmation
      socket.emit('message_sent', {
        ...messageData,
        status: 'delivered'
      });
    });

    // Handle typing indicators
    socket.on('typing', (data: { senderId: string; receiverId: string; isTyping: boolean }) => {
      const receiver = connectedUsers.get(data.receiverId);
      if (receiver) {
        io.to(receiver.socketId).emit('user_typing', {
          senderId: data.senderId,
          isTyping: data.isTyping
        });
      }
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
      for (const [userId, userData] of connectedUsers.entries()) {
        if (userData.socketId === socket.id) {
          connectedUsers.delete(userId);
          console.log(`👋 User ${userId} disconnected`);
          break;
        }
      }
    });
  });

  return io;
};