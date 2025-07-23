import { useEffect, useState } from 'react';
import { useSocket } from '../data/providers/SocketProvider';
import CardAnalytics from '../components/CardAnalytics';

const Analytics = () => {
  const socket = useSocket();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null)

  const sendCountAction = () => {
    socket.emit('increment_counter', {});
  }

  const sendMessage = () => {
    socket.emit('send_message', {
      message: "Este es un mensaje de vite",
      username: "Angel"
    });
  }

  useEffect(() => {
    if (!socket) return;
    socket.on('counter_updated', (data) => {
      console.log('Se recibio un evento del socket')
      console.log(data.count)
      setCount(data.count)
    })
    socket.on('receive_message', (data) => {
      console.log('Se recibio un evento del socket')
      console.log(data)
      setMessage(data)
    })
    return () => {
      socket.off('counter_updated')
      socket.off('receive_message')
    }
  }, [socket])
  return (
    <>
      <h1>Analytics</h1>
      <p>{count}</p>
      <p>{message && message.toString()}</p>
      <button
        className="bg-yellow-200 py-2 px-4 rounded"
        style={{ cursor: 'pointer' }}
        onClick={() => sendMessage()}
      >
        Send Message
      </button>
      <CardAnalytics />
    </>
  )
}

export default Analytics;