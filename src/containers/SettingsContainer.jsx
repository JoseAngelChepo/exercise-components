import { useState, useEffect } from 'react'
import { useServices } from '../data/providers/ServicesProvider'
import SettingsUser from '../components/SettingsUser'
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
    </>
  )
}

export default SettingsContainer;