import React, { PropTypes } from 'react';

export default class Panel extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className, onClick } = this.props;
    return (
      <div onClick={onClick} className={className}></div>
    );
  }
}
