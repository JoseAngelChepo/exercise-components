import { createContext, useContext, useEffect, useState } from 'react';
import { useServices } from './ServicesProvider';
import { io } from 'socket.io-client';

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { getToken } = useServices();

  useEffect(() => {
    const token = getToken();
    const newSocket = io(
      "http://127.0.0.1:3000",
      {
        transports: ['websocket'],
        auth: {
          token: token
        }
      }
    )
    // newSocket.emit('register', {});
    setSocket(newSocket);
    return () => {
      newSocket.close();
    }
  }, []);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

const useSocket = () => {
  return useContext(SocketContext);
}

export { SocketProvider, useSocket };
