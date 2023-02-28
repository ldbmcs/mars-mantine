import React, { useState } from 'react'
import { RangeCalendar } from '@mantine/dates'
import { Card } from '@mantine/core'

const MarsRangeCalendar = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2021, 11, 1), new Date(2021, 11, 5)])
  return (
    <Card withBorder>
      <RangeCalendar value={value} onChange={(e) => setValue(e)} />
    </Card>
  )
}

export default MarsRangeCalendar
