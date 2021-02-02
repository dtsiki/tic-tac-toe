import PropTypes from 'prop-types';
import React from 'react';

const MessageTitle = ({ children }) => {
  return (
    <div className="message__title">{children}</div>
  );
};

MessageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default MessageTitle;
