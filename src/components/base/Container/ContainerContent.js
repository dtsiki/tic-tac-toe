import PropTypes from 'prop-types';
import React from 'react';

const ContainerContent = ({ children, hasTitle }) => {
	return (
    <div className={`container-content${hasTitle ? ' container-content--has-title' : ''}`}>
      {children}
    </div>
  );
};

ContainerContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  hasTitle: PropTypes.bool,
};

export default ContainerContent;
