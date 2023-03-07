import React, { ReactElement } from 'react'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'
import { Stack } from '@mantine/core'
import ModalSection from 'pages/home/overlays/ModalSection'
import DrawerSection from 'pages/home/overlays/DrawerSection'
import PopoverSection from 'pages/home/overlays/PopoverSection'
import HoverCardSection from 'pages/home/overlays/HoverCardSection'

const Overlays: NextPageWithLayout = () => {
  return (
    <Stack align="center">
      <ModalSection />
      <DrawerSection />
      <PopoverSection />
      <HoverCardSection />
    </Stack>
  )
}

Overlays.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'Overlays',
    },
  }
}

export default Overlays
