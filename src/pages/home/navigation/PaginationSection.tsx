import React from 'react'
import { Pagination, Stack, Text } from '@mantine/core'

const PaginationSection = () => {
  return (
    <Stack>
      <Text>Pagination component</Text>
      <Pagination total={10} />
    </Stack>
  )
}

export default PaginationSection
