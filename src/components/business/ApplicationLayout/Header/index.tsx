import React from 'react'
import { Group, Header } from '@mantine/core'

import AvatarMenu from './AvatarMenu'
import { Logo } from 'components/ui'

const MarsHeader = () => (
  <Header height={52} px="lg" display="flex">
    <Group position="apart" w="100%">
      <Group position="left" spacing="lg">
        <Logo />
      </Group>
      <Group spacing="md">
        <Group spacing="sm">
          <AvatarMenu />
        </Group>
      </Group>
    </Group>
  </Header>
)

export default MarsHeader
