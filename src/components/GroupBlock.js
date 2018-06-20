import React from 'react';
import PropTypes from 'prop-types';
import './GroupBlock.css';

class GroupBlock extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="GroupBlock">
        <div className="GroupBlock__title">{title}</div>
        <div className="GroupBlock__content">{children}</div>
      </div>
    );
  }
}

GroupBlock.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default GroupBlock;
