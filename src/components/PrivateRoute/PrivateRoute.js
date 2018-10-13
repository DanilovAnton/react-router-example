import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, component, ...restProps } = this.props;
    if (isAuthorized) return <Route {...restProps} component={component} />;
    return <Redirect to="/login" />;
  }
}

export default withAuth(PrivateRoute);
