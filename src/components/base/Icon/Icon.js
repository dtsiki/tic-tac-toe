import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmileWink,
  faTimes,
  faCheck,
  faPlay,
  faSync,
  faDotCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const Icon = ({ name, className, isInline }) => {
  const renderIcon = () => {
    switch (name) {
      case 'cross':
        return <FontAwesomeIcon icon={faTimes} />;
      case 'circle':
        return <FontAwesomeIcon icon={faDotCircle} />;
      case 'repeat':
        return <FontAwesomeIcon icon={faSync} />;
      case 'play':
        return <FontAwesomeIcon icon={faPlay} />;
      case 'check':
        return <FontAwesomeIcon icon={faCheck} />;
      case 'close':
        return <FontAwesomeIcon icon={faTimes} />;
      case 'next':
        return <FontAwesomeIcon icon={faChevronRight} />;
      case 'smile':
        return <FontAwesomeIcon icon={faSmileWink} />;
      default:
        return <FontAwesomeIcon icon={faSmileWink} />;
    };
  };

  if(isInline) {
    return (
        <span className={`icon${className ? ` ${className}` : ''}`} aria-hidden="true">
          {renderIcon()}
        </span>
    );
  } else return (
    <div className={`icon${className ? ` ${className}` : ''}`} aria-hidden="true">
      {renderIcon()}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  isInline: PropTypes.bool
};

export default Icon;
