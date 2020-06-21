import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Signin from './components/signin'

import HomePage from './pages/home'
import SigninPage from './pages/signin'
import TodoPage from './pages/todo'
import ErrorPage from './pages/error'

import GlobalNavbar from './components/global-navbar'
import GlobalStyles from './components/global-styles'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <GlobalNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signin" component={SigninPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App // 그 요소 자체를 export 하겠다. default 없이 그냥 export 하는 경우 객체로 반환함.
