import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'
import Logout from './components/auth/Logout'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/create" component={CreateProject} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
