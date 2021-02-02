import PropTypes from 'prop-types';
import React from 'react';

const MessageContent = ({ children }) => {
  return (
    <div className="message__content">{children}</div>
  );
};

MessageContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default MessageContent;
