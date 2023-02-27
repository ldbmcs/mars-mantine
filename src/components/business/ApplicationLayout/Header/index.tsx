import React from 'react'
import { Group, Header } from '@mantine/core'
import { Logo } from 'components/ui'

const MarsHeader = () => (
  <Header height={52} px="lg" display="flex">
    <Group position="apart" w="100%">
      <Group position="left" spacing="lg">
        <Logo />
      </Group>
    </Group>
  </Header>
)

export default MarsHeader
