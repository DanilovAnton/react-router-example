import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxMail extends PureComponent {
  render() {
    const { data, ...rest } = this.props;
    return <MailList {...rest} className="t-inbox-list" list={data.inbox} />;
  }
}

export default withData(InboxMail);
