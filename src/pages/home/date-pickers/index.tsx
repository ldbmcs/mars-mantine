import React, { ReactElement } from 'react'
import { Container } from '@mantine/core'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'

const Inputs: NextPageWithLayout = () => <Container size={700}>DatePickers</Container>

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
