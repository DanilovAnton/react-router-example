import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';
import cn from 'classnames';

class AppRouter extends Component {
  renderNavList = () => {
    const {
      match: { url }
    } = this.props;

    const classes = {
      home: cn(styles.link, 't-link-home'),
      inbox: cn(styles.link, 't-link-inbox'),
      outbox: cn(styles.link, 't-link-outbox')
    };
    return (
      <nav className={styles.nav}>
        <ul className={cn(styles.navList, 't-nav-list')}>
          <li className={styles.navElement}>
            <NavLink className={classes.home} to={`${url}`} exact>
              Home
            </NavLink>
          </li>
          <li className={styles.navElement}>
            <NavLink className={classes.inbox} to={`${url}/inbox`} exact>
              Inbox
            </NavLink>
          </li>
          <li className={styles.navElement}>
            <NavLink className={classes.outbox} to={`${url}/outbox`} exact>
              Outbox
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  renderRoutes = () => {
    const {
      match: { url }
    } = this.props;

    const links = {
      home: { path: url, label: 'Home' },
      inbox: { path: `${url}/inbox`, label: 'Inbox' },
      outbox: { path: `${url}/outbox`, label: 'Outbox' }
    };

    return (
      <Switch>
        <Route path={links.home.path} exact component={HomePage} />
        <Route path={links.inbox.path} exact component={InboxList} />
        <Route path={`${links.inbox.path}/:id`} component={InboxMail} />
        <Route path={links.outbox.path} exact component={OutboxList} />
        <Route path={`${links.outbox.path}/:id`} component={OutboxMail} />
      </Switch>
    );
  };

  getTitle = () => {
    const { location } = this.props;
    const path = location.pathname.split('/');
    return path.length === 2 ? 'Home' : path[2];
  };

  render() {
    this.getTitle();
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {this.renderNavList()}
          <div className={styles.content}>
            <h3 className={styles.title}>{this.getTitle()}</h3>
            {this.renderRoutes()}
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
