import { useEffect } from "react";
import ChatBubble from "./ChatBubble";
import { LuSend } from "react-icons/lu";

const ChatComponent = (props) => {
  const { value, setValue, messages, sendMessage, user } = props;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    const chatMessages = document.querySelector('.container-messages')
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  }, [messages])
  return (
    <>
      <div className="container-chat">
        <div className="container-messages">
          {(messages && messages.length > 0) && messages.map((message, index) => 
            <ChatBubble
              key={index}
              side={message.sender === user.email ? 'right' : 'left'}
              sender={message.sender}
              message={message.text}
            />
          )}
        </div>
        <div className="container-input">
          <input 
            className="input-message"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="button-send-message"
            onClick={() => sendMessage()}
          >
            <LuSend size={20} />
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .container-chat {
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #000;
            border-radius: 9px;
            padding: 20px;
            margin: 10px 40px;
          }
          .container-messages {
            padding: 0px 15px;
            height: 60vh;
            overflow-y: scroll;
            margin-bottom: 10px;
          }
          .container-input {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .input-message {
            width: 85%;
            height: 40px;
            border: 1px solid #000;
            border-radius: 20px;
            padding-left: 10px;
            padding-right: 10px;
            outline: none;
          }
          .button-send-message {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
            outline: none;
            cursor: pointer;
          }
          .button-send-message:hover {
            background-color: #eaeaea;
          }
          .button-send-message:focus {
            outline: none;
          }
        `}
      </style>
    </>
  )
}

export default ChatComponent;