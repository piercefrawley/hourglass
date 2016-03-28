import React, { PropTypes } from 'react';

export default class Panel extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    return (
      <div className={className}></div>
    );
  }
}
