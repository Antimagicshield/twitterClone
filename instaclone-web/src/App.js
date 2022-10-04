import { ApolloProvider, useReactiveVar } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/LogIn'
import NotFound from './screens/NotFound'
import { client, darkModeVar, isLoggedInVar } from './Apollo'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './styles'
import SignUp from './screens/SignUp'
import routes from './screens/routes'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const darkMode = useReactiveVar(darkModeVar)
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                path={routes.home}
                exact
                element={isLoggedIn ? <Home /> : <Login />}
              />
              <Route
                path={routes.signUp}
                element={!isLoggedIn ? <SignUp /> : null}
              />
              <Route element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  )
}

export default App
