import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/UI/Buttons'
import { GlobalStyle } from './utils/Global'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from './utils'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = React.useState(false)

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      {' '}
      <GlobalStyle />
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <PrimaryButton modifiers={['small', 'success', 'primaryButtonSuccess']}>
          {' '}
          Hello world{' '}
        </PrimaryButton>
        <SecondaryButton modifiers={['large', 'warning', 'secondaryButtonWarning']}>
          {' '}
          Goodbye world{' '}
        </SecondaryButton>
        <TertiaryButton modifiers={['error', 'tertiaryButtonError']}>
          {' '}
          Hey world{' '}
        </TertiaryButton>
      </div>
    </ThemeProvider>
  )
}

export default App
