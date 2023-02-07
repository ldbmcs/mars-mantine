import { Avatar, Menu, UnstyledButton } from '@mantine/core';
import { IconLogout, IconUserCircle } from '@tabler/icons';
import React from 'react';
import { useRecoilState } from 'recoil';
import { stateCurrentUser } from 'states/users';
import { Login } from 'config/constants/routerPath';
import appContext from 'service';
import client from 'plugins/apollo/client';
import { useLogoutMutation } from 'types/domain';

const AvatarMenu = () => {
  const [logout] = useLogoutMutation();
  const [currentUser, setCurrentUser] = useRecoilState(stateCurrentUser);

  const handleLogout = () => {
    logout().then(() => {
      window.location.href = Login;
      setCurrentUser(null);
      appContext.reset();
      client.clearStore().then();
    });
  };

  return (
    <Menu width={200} shadow="sm" position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Avatar size={28} radius="xl">{currentUser?.name}</Avatar>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          px="md"
          py="sm"
          icon={<IconUserCircle size={20} stroke={1.5} />}
        >
          我的账户
        </Menu.Item>
        <Menu.Divider my="xs" />
        <Menu.Item px="md" py="sm" icon={<IconLogout size={20} stroke={1.5} />} color="red" onClick={handleLogout}>
         退出登录
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AvatarMenu;
