import React, { PropTypes } from 'react';

export default class Panel extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className, onMouseOver, content } = this.props;
    return (
      <div onMouseOver={onMouseOver} className={className}>
        {JSON.stringify(content)}
      </div>
    );
  }
}
