import { Avatar, Menu, UnstyledButton } from '@mantine/core'
import { IconLogout, IconSettings, IconUserCircle } from '@tabler/icons'
import React from 'react'
import { useRecoilState } from 'recoil'
import { stateCurrentUser } from 'states/users'
import { Login } from 'config/constants/routerPath'
import appContext from 'service'
import client from 'plugins/apollo/client'
import { useLogoutMutation } from 'types/domain'

const AvatarMenu = () => {
  const [logout] = useLogoutMutation()
  const [currentUser, setCurrentUser] = useRecoilState(stateCurrentUser)

  const handleLogout = () => {
    logout().then(() => {
      window.location.href = Login
      setCurrentUser(null)
      appContext.reset()
      client.clearStore().then()
    })
  }

  return (
    <Menu width={150} shadow="md" position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Avatar size={30} radius="xl">
            {currentUser?.name || 'ldbmcs'}
          </Avatar>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconSettings size={20} stroke={1.5} />}>设置</Menu.Item>
        <Menu.Item icon={<IconUserCircle size={20} stroke={1.5} />}>我的账户</Menu.Item>
        <Menu.Item icon={<IconLogout size={20} stroke={1.5} />} color="red" onClick={handleLogout}>
          退出登录
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default AvatarMenu
