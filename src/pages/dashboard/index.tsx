import React, { ReactElement } from 'react';
import { Container } from '@mantine/core';
import MarsLayout from 'components/business/ApplicationLayout';
import { NextPageWithLayout } from 'types/nextCustomType';

const Dashboard: NextPageWithLayout = () => (
      <Container size={700}>
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
      </Container>
  );

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>;
};

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: '仪表盘',
    },
  };
}

export default Dashboard;
