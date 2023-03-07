import React, { FC } from 'react'
import { Center, Navbar, NavLink } from '@mantine/core'
import {
  IconBuildingCarousel,
  IconContainer,
  IconDashboard,
  IconEdit,
  IconInputSearch,
  IconNavigation,
  IconOverline,
  IconTimeline,
} from '@tabler/icons-react'
import {
  Carousel,
  Content,
  DatePickers,
  Home,
  Inputs,
  Navigation,
  Overlays,
  RichTextEditor,
} from 'config/constants/routerPath'
import { useRouter } from 'next/router'
import Link from 'next/link'

const data = [
  { pathname: Home, label: 'Dashboard', icon: <IconDashboard /> },
  { pathname: Inputs, label: 'Inputs', icon: <IconInputSearch /> },
  { pathname: DatePickers, label: 'DatePickers', icon: <IconTimeline /> },
  { pathname: Navigation, label: 'Navigation', icon: <IconNavigation /> },
  { pathname: Overlays, label: 'Overlays', icon: <IconOverline /> },
  { pathname: Content, label: 'Content', icon: <IconContainer /> },
  { pathname: RichTextEditor, label: 'RichTextEditor', icon: <IconEdit /> },
  { pathname: Carousel, label: 'Carousel', icon: <IconBuildingCarousel /> },
]
const Nav: FC = () => {
  const { pathname: currentPath } = useRouter()
  const links = data.map((item) => (
    <Link href={item.pathname} passHref key={item.label}>
      <NavLink
        px="sm"
        py="xs"
        variant="light"
        component="a"
        label={item.label}
        active={currentPath === item.pathname}
        icon={<Center style={{ width: '20px' }}>{item.icon}</Center>}
      />
    </Link>
  ))

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  )
}

export default Nav
