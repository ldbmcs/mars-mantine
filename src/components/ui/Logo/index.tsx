import React, { FC } from 'react'
import { Home } from 'config/constants/routerPath'
import { AnchorLink } from '..'
import { MantineLogo } from '@mantine/ds'

const Logo: FC = () => (
  <AnchorLink href={Home}>
    <MantineLogo size={28} />
  </AnchorLink>
)

export default Logo
