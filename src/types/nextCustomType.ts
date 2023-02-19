import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

export type PageProps = {}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps?: PageProps
}
