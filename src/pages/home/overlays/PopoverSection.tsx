import React from 'react'
import { Button, Popover, Text } from '@mantine/core'

const PopoverSection = () => {
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="default">Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  )
}

export default PopoverSection
