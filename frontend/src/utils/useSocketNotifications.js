import { useEffect } from 'react';
import socket from '../utils/socket';

export default function useSocketNotifications(userId, onNotification) {
  useEffect(() => {
    if (!userId) return;
    socket.connect();
    socket.emit('join', userId);
    socket.on('receiveNotification', onNotification);
    return () => {
      socket.off('receiveNotification', onNotification);
      socket.disconnect();
    };
  }, [userId, onNotification]);
}
