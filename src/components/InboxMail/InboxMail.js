import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const { data, match } = this.props;
    const inbox = data.inbox.find(el => el.id === match.params.id);
    return <Mail header="From" mail={inbox.from} body={inbox.body} />;
  }
}

export default withData(InboxMail);
