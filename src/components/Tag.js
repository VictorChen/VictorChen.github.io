import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

class Tag extends React.Component {
  render() {
    const { icon, text } = this.props;

    return (
      <div className="Tag">
        {icon &&
          <img className="Tag__icon" src={icon} alt={text} />
        }
        <span className="Tag__text">{text}</span>
      </div>
    );
  }
}

Tag.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Tag;
