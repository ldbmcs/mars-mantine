import React, { useState } from 'react'
import { Button, Drawer, Group } from '@mantine/core'

const DrawerSection = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Register" padding="xl" size="xl">
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  )
}

export default DrawerSection
