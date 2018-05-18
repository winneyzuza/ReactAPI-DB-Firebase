import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Api from './components/api'
import Db from './components/db'
import Firebase from './components/firebase'

const Main = () => (
  <main>
    <Switch>
      <Route path='/api' component={Api}/>
      <Route path='/db' component={Db}/>
      <Route path='/firebase' component={Firebase}/>
    </Switch>
  </main>
)

export default Main
