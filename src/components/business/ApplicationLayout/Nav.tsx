import React, { FC, useState } from 'react'
import { createStyles, Navbar, getStylesRef, rem } from '@mantine/core'
import {
  IconBuildingCarousel,
  IconContainer,
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
  Inputs,
  Navigation,
  Overlays,
  RichTextEditor,
} from 'config/constants/routerPath'

const useStyles = createStyles((theme, _params) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}))

const data = [
  { pathname: Inputs, label: 'Inputs', icon: IconInputSearch },
  { pathname: DatePickers, label: 'DatePickers', icon: IconTimeline },
  { pathname: Navigation, label: 'Navigation', icon: IconNavigation },
  { pathname: Overlays, label: 'Overlays', icon: IconOverline },
  { pathname: Content, label: 'Content', icon: IconContainer },
  { pathname: RichTextEditor, label: 'RichTextEditor', icon: IconEdit },
  { pathname: Carousel, label: 'Carousel', icon: IconBuildingCarousel },
]
const Nav: FC = () => {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Inputs')
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.pathname}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  )
}

export default Nav
