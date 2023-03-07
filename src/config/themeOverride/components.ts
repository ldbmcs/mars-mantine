import { MantineTheme } from '@mantine/core'

const componentsOverride = {
  NavLink: {
    styles: (theme: MantineTheme) => ({
      icon: {
        marginRight: '16px',
        color: theme.colors.gray[9],
      },
      label: {
        lineHeight: '28px',
      },
      root: {
        color: theme.colors.gray[9],
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: theme.colors.gray[0],
        },
        '&[data-active]': {
          color: theme.colors.blue[7],
          backgroundColor: theme.colors.blue[0],
        },
        '&[data-active]:hover': {
          backgroundColor: theme.colors.blue[1],
        },
        '&[data-active] .mantine-NavLink-icon': {
          color: theme.colors.blue[7],
        },
        '&[data-active] .mantine-NavLink-label': {
          fontWeight: 600,
        },
      },
    }),
  },
}

export default componentsOverride
