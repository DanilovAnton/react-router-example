import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    console.log(this.props)
    const { isAuthorized, component:RouteComponent, ...restProps} = this.props
    if (isAuthorized) {
        return  <Route {...restProps} component={RouteComponent} />
    }
    return (
      <Redirect to='/login'/>
    );
  }
}

export default withAuth(PrivateRoute);
