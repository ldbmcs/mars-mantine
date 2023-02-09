import React from 'react'
import { HeroHeader } from 'components/business/HeroHeader'
import { Stack } from '@mantine/core'
import { Features } from 'components/business/Features'
import { Faq } from 'components/business/Faq'
import { ContactUs } from 'components/business/ContactUs'
import { Footer, FooterLinksProps } from 'components/business/Footers'
import { SiteHeader } from 'components/business/SiteHeader'

export default function HomePage() {
  const footerData = {
    data: [
      {
        title: 'About',
        links: [
          {
            label: 'Features',
            link: '#',
          },
          {
            label: 'Pricing',
            link: '#',
          },
          {
            label: 'Support',
            link: '#',
          },
          {
            label: 'Forums',
            link: '#',
          },
        ],
      },
      {
        title: 'Project',
        links: [
          {
            label: 'Contribute',
            link: '#',
          },
          {
            label: 'Media assets',
            link: '#',
          },
          {
            label: 'Changelog',
            link: '#',
          },
          {
            label: 'Releases',
            link: '#',
          },
        ],
      },
      {
        title: 'Community',
        links: [
          {
            label: 'Join Discord',
            link: '#',
          },
          {
            label: 'Follow on Twitter',
            link: '#',
          },
          {
            label: 'Email newsletter',
            link: '#',
          },
          {
            label: 'GitHub discussions',
            link: '#',
          },
        ],
      },
    ],
  } as FooterLinksProps
  const siteHeaderLinks = {
    links: [
      {
        link: '/about',
        label: 'Features',
      },
      {
        link: '/pricing',
        label: 'Pricing',
      },
      {
        link: '/learn',
        label: 'Learn',
      },
      {
        link: '/community',
        label: 'Community',
      },
    ],
  }
  return (
    <Stack>
      <SiteHeader links={siteHeaderLinks.links} />
      <HeroHeader />
      <Features />
      <Faq />
      <ContactUs />
      <Footer data={footerData.data} />
    </Stack>
  )
}
