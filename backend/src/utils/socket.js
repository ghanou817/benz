// utils/socket.js
let ioInstance = null;

export function initSocket(io) {
  ioInstance = io;

  io.on('connection', (socket) => {
    // استقبال إشعار جديد من المستخدم أو المدير
    socket.on('sendNotification', (notification) => {
      // إرسال الإشعار لجميع المستخدمين أو لمستخدم محدد
      if (notification.to) {
        io.to(notification.to).emit('receiveNotification', notification);
      } else {
        io.emit('receiveNotification', notification);
      }
    });

    // الانضمام لغرفة المستخدم (حسب الـ id)
    socket.on('join', (userId) => {
      socket.join(userId);
    });
  });
}

export function getIO() {
  return ioInstance;
}
