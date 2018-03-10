import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainNavigation from './partials/MainNavigation'
import Footer from './partials/Footer'
import Jumbo from './partials/Jumbo'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Jumbo} />
      <MainNavigation />
      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
