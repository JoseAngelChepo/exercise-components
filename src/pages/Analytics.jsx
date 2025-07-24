import { useEffect, useState } from 'react';
import { useServices } from '../data/providers/ServicesProvider';
import CardAnalytics from '../components/CardAnalytics';
import ChatContainer from '../containers/ChatCointainer';
const userMock = {
  name: 'Angel',
  lastName: 'Lopez',
  email: '@',
  role: 'user'
}

const Analytics = () => {
  const [user, setUser] = useState(userMock);
  const { getUser } = useServices();

  const loadData = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <h2>Chat</h2>
      <div className='container-chat-component'>
        <ChatContainer user={user}/>
      </div>
      <style jsx>
        {`
          .container-chat-component {
            width: 500px;
          }
        `}
      </style>
    </>
  )
}

export default Analytics;