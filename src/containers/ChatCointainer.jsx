import { useEffect, useState } from "react";
import ChatComponent from "../components/ChatComponent";
import { useSocket } from '../data/providers/SocketProvider';

const messagesMock = [
  { sender: 'me', text: 'Hola mensaje 1'},
  { sender: 'Usuario a', text: 'Hola mensaje 2'},
  { sender: 'Usuario b', text: 'Hola mensaje 3'},
  { sender: 'Usuario a', text: 'Hola mensaje 4'},
  { sender: 'Usuario b', text: 'Hola mensaje 5'}
]

const ChatContainer = (props) => {
  const { user } = props;
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState(messagesMock);
  const socket = useSocket();

  const sendMessage = () => {
    if (value.length > 0) {
      setMessages(prev => [ ...prev, { sender: user.email, text: value }])
      setValue('')
      socket.emit('send', {
        topic: 'test-topic-1',
        message: JSON.stringify({
          sender: user.email,
          text: `${value} ...enviado: ${new Date().toLocaleTimeString()}`
        })
      })
    }
  }

  useEffect(() => {
    if (!socket) return;
    socket.emit('subscribe', { topic: 'test-topic-1' })

    socket.on('kafka-message', (data) => {
      const { message } = data
      console.log('Se recibio un evento del socket')
      console.log(message)
      setMessages(prev => [ ...prev, JSON.parse(message)])
    })
    return () => {
      socket.off('kafka-message')
    }
  }, [socket])

  return (
    <ChatComponent
      user={user}
      value={value}
      setValue={setValue}
      messages={messages}
      sendMessage={() => sendMessage()}
    />
  )
}

export default ChatContainer;