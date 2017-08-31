import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  Switch,
  Route,
  withRouter,
  // Redirect,
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    // this.state = {
    //   isLoggedIn: false,
    // }
  }

  login() {
    // this.setState({ isLoggedIn: true });
    this.props.history.push('/home');
  }


  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={this.state.isLoggedIn ? Home : () => { return (<Login />) }} /> */}
        <Route exact path="/" component={() => (<Login onLogin={this.login} />)} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}
export default withRouter(App);