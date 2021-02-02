import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Container = ({ children, isActive }) => {
	return (
    <div className={`container${isActive ? ' container--active' : ''}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
  isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Container;
