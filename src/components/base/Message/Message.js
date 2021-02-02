import PropTypes from 'prop-types';
import React from 'react';

import MessageTitle from './MessageTitle';
import MessageContent from './MessageContent';

import './style.scss';

const Message = ({ type, title, content }) => {
  return (
    <div className={`message${type ? ` message--${type}` : ''}`}>
      <MessageTitle>{title}</MessageTitle>
      {content && <MessageContent>{content}</MessageContent>}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Message;
