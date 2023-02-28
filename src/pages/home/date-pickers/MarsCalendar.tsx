import React, { useState } from 'react'
import { Calendar } from '@mantine/dates'
import { Card } from '@mantine/core'

const MarsCalendar = () => {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <Card withBorder>
      <Calendar value={value} onChange={(e) => setValue(e)} />
    </Card>
  )
}

export default MarsCalendar
