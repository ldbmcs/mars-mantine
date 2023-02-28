import React, { ReactElement } from 'react'
import { Center, SimpleGrid } from '@mantine/core'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'
import { DatePicker, DateRangePicker, TimeInput, TimeRangeInput } from '@mantine/dates'
import MarsCalendar from './MarsCalendar'
import MarsRangeCalendar from './MarsRangeCalendar'

const Inputs: NextPageWithLayout = () => (
  <Center>
    <SimpleGrid cols={2}>
      <DatePicker placeholder="Pick date" label="Date picker" withAsterisk />
      <DateRangePicker label="Date range picker" placeholder="Pick dates range" />
      <TimeInput label="Time input" />
      <TimeRangeInput label="Time range input" clearable />
      <MarsCalendar />
      <MarsRangeCalendar />
    </SimpleGrid>
  </Center>
)

Inputs.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'Inputs',
    },
  }
}

export default Inputs
