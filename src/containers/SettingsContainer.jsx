import { useState, useEffect } from 'react'
import { useServices } from '../data/providers/ServicesProvider'
import SettingsUser from '../components/SettingsUser'
import AgentContainer from './AgentContainer'

const userMock = {
  name: 'Angel',
  lastName: 'Lopez',
  email: '@',
  role: 'user'
}

const SettingsContainer = () => {
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
      <SettingsUser
        user={user}
      />
      <div className='container-support-chat'>
        <AgentContainer
          user={user}
        />
      </div>
      <style jsx>
        {`
          .container-support-chat {
            position: absolute;
            bottom: 30px;
            right: 40px;
          }
        `}
      </style>
    </>
  )
}

export default SettingsContainer;