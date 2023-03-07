import React, { ReactElement } from 'react'
import { Card, Center, SimpleGrid } from '@mantine/core'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'
import { Calendar, DatePicker, TimeInput } from '@mantine/dates'

const DataPickers: NextPageWithLayout = () => (
  <Center>
    <SimpleGrid cols={2}>
      <DatePicker placeholder="Pick date" />
      <DatePicker type="range" placeholder="Pick dates range" />
      <TimeInput label="Time input" />
      <TimeInput type="range" label="Time range input" />
      <Card withBorder>
        <Calendar />
      </Card>
    </SimpleGrid>
  </Center>
)

DataPickers.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'DataPickers',
    },
  }
}

export default DataPickers
