import React from 'react'
import '../styles/styles.css'
import PageWithLayoutType from '../types/pageWithLayoutType'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from "next-auth/react"
import { lightTheme, darkTheme } from '../styles/Theme'
import { GlobalStyles } from '../styles/globalStyles'
import { useDarkMode } from '../utils/customHooks/useDarkMode'
import ToggleThemeBtn from '../components/toggleThemeBtn/ToggleThemeBtn'
import AuthWrapper from '../components/auth/AuthWrapper'

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const Layout = Component.layout || ((children) => <>
    {children}
  </>);

  if (!componentMounted) {
    return <div />
  }

  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Layout>
            <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp