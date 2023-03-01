import React from 'react'
import { Group, Header } from '@mantine/core'
import { Logo } from 'components/ui'
import AvatarMenu from 'components/business/ApplicationLayout/Header/AvatarMenu'

const MarsHeader = () => (
  <Header height={52} px="lg" display="flex">
    <Group position="apart" w="100%">
      <Group position="left" spacing="lg">
        <Logo />
      </Group>
      <AvatarMenu />
    </Group>
  </Header>
)

export default MarsHeader
