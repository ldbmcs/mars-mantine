import React, { PropsWithChildren } from 'react';
import { AppShell } from '@mantine/core';
import Nav from './Nav';
import MarsHeader from './Header';
import WithUserInfoLayout from './WithUserInfoLayout';

type Props = {
  reverseDisplay?: boolean
};

const MarsLayout = (props: PropsWithChildren<Props>) => {
  const { reverseDisplay = false, children } = props;

  return (
        <WithUserInfoLayout>
            <AppShell
              padding="lg"
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              navbar={<Nav />}
              header={<MarsHeader />}
              styles={(theme) => ({
                root:
                  theme.colorScheme === 'dark'
                    ? {}
                    : {
                        background: reverseDisplay ? theme.colors.gray[0] : theme.white,
                      },
              })}
            >
              <div className="relative h-full">{children}</div>
            </AppShell>
        </WithUserInfoLayout>
  );
};

export default MarsLayout;
