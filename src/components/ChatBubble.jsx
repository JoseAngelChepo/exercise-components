const ChatBubble = (props) => {
  const { side, sender, message } = props;
  return (
    <>
      <div
        className="flex w-full"
        style={{ justifyContent: side === 'left' ? 'start' : 'end'  }}
      >
        <div
          className="container-chat-bubble"
          style={{ alignItems: side === 'left' ? 'start': 'end' }}
        >
          <p className="text-sender">{sender}</p>
          <p className="text-message">{message}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container-chat-bubble {
            width: 80%;
            display: flex;
            justify-content: start;
            flex-direction: column;
            background-color: #eaeaea;
            margin: 7px 0px;
            padding: 8px 10px;
            border-radius: 12px;
          }
          .text-sender {
            font-size: 0.8rem;
            font-weight: 700;
          }
          .text-message {
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  )
}

export default ChatBubble;