import React, { ReactElement } from 'react'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'
import { Stack } from '@mantine/core'
import AccordionContent from './AccordionContent'
import TimelineContent from './TimelineContent'

const Content: NextPageWithLayout = () => {
  return (
    <Stack>
      <AccordionContent />
      <TimelineContent />
    </Stack>
  )
}

Content.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'Content',
    },
  }
}

export default Content
