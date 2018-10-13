import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ className, match, list }) => (
  <div className={`${styles.container} t-inbox-list`}>
    {list.map(el => {
      const text = el.body.split('\n');
      return (
        <NavLink
          key={el.id}
          className={`${styles.link} ${className}`}
          to={`${match.url}/${el.id}`}
        >
          {text[0]}
          ...
        </NavLink>
      );
    })}
  </div>
);

export default MailList;
