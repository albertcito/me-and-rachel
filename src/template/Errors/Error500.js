import React from 'react';
import Exception from './Exception';
import './index.scss';

export default class Error500 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children, title, message} = this.props;
    if (this.state.hasError) {
      return (<div className="content-width page-error">
        <Exception
          type="500"
          title={title}
          desc={message}
          actions=""
        />
      </div>);
    }
    return children;
  }
}