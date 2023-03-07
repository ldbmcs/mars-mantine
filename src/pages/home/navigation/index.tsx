import React, { ReactElement } from 'react'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'
import { Stack } from '@mantine/core'
import TabsSection from 'pages/home/navigation/TabsSection'
import StepperSection from 'pages/home/navigation/StepperSection'
import PaginationSection from 'pages/home/navigation/PaginationSection'

const Navigation: NextPageWithLayout = () => {
  return (
    <Stack>
      <TabsSection />
      <StepperSection />
      <PaginationSection />
    </Stack>
  )
}

Navigation.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'Navigation',
    },
  }
}

export default Navigation
