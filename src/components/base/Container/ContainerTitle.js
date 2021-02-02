import PropTypes from 'prop-types';
import React from 'react';

import { Title } from './../Typography/';

const ContainerTitle = ({ children }) => {
	return (
    <div className="container-title">
      <Title type="h1">{children}</Title>
    </div>
  );
};

ContainerTitle.propTypes = {
  children: PropTypes.string,
};

export default ContainerTitle;
