import { useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { WS_URL } from '../lib/axios';
import { useAuthStore } from '../store/useAuthStore';

export function useSocket() {
  const { profile } = useAuthStore();
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(() => {
    const socket = io(WS_URL, {
      autoConnect: true,
      auth: {
        token: profile?.jwt
      },
    });
    return socket
  });

  const disconnect = () => {
    console.log(`Disconnecting`)
    if (socket) {
      socket.disconnect();
      socket.removeAllListeners();
      setSocket(null);
    }
  }

  const reconnect = () => {
    const socket = io(WS_URL, {
      autoConnect: true,
      auth: {
        token: profile?.jwt
      },
    });
    setSocket(socket);
  }

  return {
    socket,
    disconnect,
    reconnect,
    setSocket
  };
}