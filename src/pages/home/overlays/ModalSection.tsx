import React, { useState } from 'react'
import { Button, Group, Modal } from '@mantine/core'

const ModalSection = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!"></Modal>
      <Group position="center">
        <Button variant="default" onClick={() => setOpened(true)}>
          Open Modal
        </Button>
      </Group>
    </>
  )
}

export default ModalSection
