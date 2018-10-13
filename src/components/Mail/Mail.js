import React from 'react';
import styles from './Mail.module.css';

const Mail = ({ header, mail, body }) => (
  <div className={styles.container}>
    <p className={`t-mail-${header.toLowerCase()}`}>
      {header}: <b>{mail}</b>
    </p>
    <p className="t-mail-body">{body}</p>
  </div>
);

export default Mail;
