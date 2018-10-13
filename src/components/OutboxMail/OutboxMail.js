import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const { data, match } = this.props;
    const outbox = data.outbox.find(el => el.id === match.params.id);
    return <Mail header="To" mail={outbox.to} body={outbox.body} />;
  }
}

export default withData(InboxMail);
