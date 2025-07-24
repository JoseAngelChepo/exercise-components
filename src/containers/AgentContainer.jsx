import { useEffect, useState } from "react";
import ChatComponent from "../components/ChatComponent";
import { RiChatAiFill } from "react-icons/ri";

const messagesMock = [
  { sender: 'me', text: 'Hola mensaje 1'},
  { sender: 'Usuario a', text: 'Hola mensaje 2'},
  { sender: 'Usuario b', text: 'Hola mensaje 3'},
  { sender: 'Usuario a', text: 'Hola mensaje 4'},
  { sender: 'Usuario b', text: 'Hola mensaje 5'}
]

const AgentContainer = (props) => {
  const { user } = props;
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatIsOpen, setChatIsOpen] = useState(false);

  const sendMessage = async () => {
    if (value.length > 0) {
      const conversation = [
        ...messages,
        { 
          role: 'user',
          content: value 
        }
      ]
      setMessages(prev => [ ...prev, { 
        role: 'user',
        content: value 
      }])
      const baseUrl = 'http://127.0.0.1:5001/api/sse/agent-chat'
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
          'Authorization': 'Bearer ' + 'token'
        },
        body: JSON.stringify({ messages: conversation })
      })
      if (!response.ok) {
        alert('Error en SSE')
      }

      let fullMessage = '';

      const assistantId = Date.now().toString()
      setMessages(prev => [ ...prev, { 
        id: assistantId,
        role: 'assistant',
        content: fullMessage
      }])

      // Process the stream using ReadableStream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());
      
        for (const line of lines) {
          // console.log(line)
          try {
            const jsonStr = line.replace(/^data: /, '')
            const data = JSON.parse(jsonStr)

            if (data.content) {
              fullMessage += data.content;
              // Editar un mensaje que busco através de su id dentro del array
              setMessages(prev => prev.map(msg => 
                msg.id === assistantId 
                ? { ...msg, content: fullMessage }
                : msg
              ))
            }

          } catch (err) {
            console.log(err)
          }
        }
      }

      setValue('')
    }
  }

  return (
    <>
      <div className="container-button-chat">
        {chatIsOpen && (
          <div className="container-chat-component">
            <ChatComponent
              user={user}
              value={value}
              setValue={setValue}
              messages={messages}
              sendMessage={() => sendMessage()}
            />
          </div>
        )}
        <button
          className="button-chat"
          onClick={() => setChatIsOpen(!chatIsOpen)}
        >
          <RiChatAiFill size={28} color="#fff" />
        </button>
      </div>
      <style jsx>
        {`
          .container-button-chat {
            position: relative;
          }
          .button-chat {
            width: 50px;
            height: 50px;
            background-color: #8a00ca;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
          }
          .container-chat-component {
            position: absolute;
            width: 350px;
            bottom: 30px;
            right: 90px;
          }
        `}
      </style>
    </>
  )
}

export default AgentContainer;