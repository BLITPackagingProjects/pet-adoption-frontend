import React from 'react'
import NavBar from './NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import Pets from './Pets'
import Applications from './Applications'
import NotFound from './NotFound'
import Logout from './Logout'

const App = () => {
  return (
    <div>
      <NavBar/>
      <div>
      <Switch>
      <Route path="/login" component={LogIn} />
      <Route path="/not-found" component={NotFound} />
      {localStorage.getItem('token')? <Route path="/pets" component={Pets}/>: <Redirect to="/login"/> }
      {localStorage.getItem('token')? <Route path="/applications" component={Applications}/>: <Redirect to="/login"/> }
      <Route path="/logout" component={Logout} />

      <Redirect to="/not-found" />
      </Switch>
        
        {/* <Route path="/home" component={Home} />
        <Route path="/home" component={Home} /> */}

      </div>
    </div>
  )
}

export default App