import React, { FC } from 'react'
import { Navbar, NavLink } from '@mantine/core'
import {
  IconBuildingCarousel,
  IconContainer,
  IconEdit,
  IconInputSearch,
  IconNavigation,
  IconTimeline,
} from '@tabler/icons'
import { DatePickers, Inputs, RichTextEditor } from 'config/constants/routerPath'
import { useRouter } from 'next/router'

const data = [
  { pathname: Inputs, label: 'Inputs', icon: <IconInputSearch /> },
  { pathname: DatePickers, label: 'DatePickers', icon: <IconTimeline /> },
  { pathname: '', label: 'Overlay&Navigation', icon: <IconNavigation /> },
  { pathname: '', label: 'Content', icon: <IconContainer /> },
  { pathname: RichTextEditor, label: 'RichTextEditor', icon: <IconEdit /> },
  { pathname: '', label: 'Carousel', icon: <IconBuildingCarousel /> },
]
const Nav: FC = () => {
  const { pathname: currentPath } = useRouter()

  const links = data.map((item) => {
    return (
      <NavLink
        key={item.label}
        label={item.label}
        active={currentPath === item.pathname}
        icon={item.icon}
        component="a"
        href={item.pathname}
      />
    )
  })

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  )
}

export default Nav
