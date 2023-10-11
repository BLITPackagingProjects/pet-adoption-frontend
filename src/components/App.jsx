import React from 'react'
import NavBar from './NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import LogIn from './LogIn'
import Pets from './Pets'
import { Showallapplications } from './Showallapplications'
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
      <Route path="/logout" component={Logout} />
      <Route path="/app" component={Showallapplications}/>

      <Redirect to="/not-found" />
      </Switch>
        
        {/* <Route path="/home" component={Home} />
        <Route path="/home" component={Home} /> */}

      </div>
    </div>
  )
}

export default App