import React from 'react'
import '../styles/styles.css'
import PageWithLayoutType from '../types/pageWithLayoutType'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/Theme'
import { GlobalStyles } from '../styles/globalStyles'
import { useDarkMode } from '../utils/customHooks/useDarkMode'
import ToggleThemeBtn from '../components/toggleThemeBtn/ToggleThemeBtn'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp