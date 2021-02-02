import PropTypes from 'prop-types';
import React from 'react';

import Icon from './../Icon';

import './style.scss';

const ContainerControl = ({ onClick, position, label, icon }) => {
  return (
    <div className={`container-control container-control--${position}`}>
      <button className="container-button" onClick={onClick}>
        <Icon className="container-button__icon" name={icon} isInline />
        <span className="container-button__label">{label}</span>
      </button>
    </div>
  )
};

ContainerControl.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
};

export default ContainerControl;
