import { useReactiveVar } from '@apollo/client'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import LogIn from './screens/LogIn'
import NotFound from './screens/NotFound'
import { DarkModeVar, isLoggedInVar } from './Apollo'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './styles'

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const darkMode = useReactiveVar(DarkModeVar)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Home /> : <LogIn />}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
