import React, { FC } from 'react'
import { Navbar } from '@mantine/core'
import { IconDashboard, IconSettings } from '@tabler/icons'
import { MainLink } from 'components/ui'
import { Dashboard, Settings } from 'config/constants/routerPath'

const Nav: FC = () => {
  const navs = [
    {
      icon: <IconDashboard />,
      iconActive: <IconDashboard />,
      label: '概览',
      pathname: Dashboard,
    },
    // {
    //   icon: <IconMessage />,
    //   iconActive: <IconMessage />,
    //   label: '表单',
    //   pathname: ApplicationFeedback,
    //   activePathNames: [ApplicationFeedbackShow, ApplicationFeedbackEntries],
    // },
  ]

  const SettingNav = {
    icon: <IconSettings />,
    iconActive: <IconSettings />,
    label: '设置',
    pathname: Settings,
    activePathNames: [Settings],
  }

  return (
    <Navbar p="md" width={{ base: 240 }}>
      <Navbar.Section grow>
        {navs.map((link) => (
          <MainLink key={link.label} {...link} />
        ))}
      </Navbar.Section>
      <Navbar.Section>
        <MainLink {...SettingNav} className="mb-0" />
      </Navbar.Section>
    </Navbar>
  )
}

export default Nav
