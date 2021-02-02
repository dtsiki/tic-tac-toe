import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ children, align, isLight, isAccent }) => {
    return (
        <p className={`text${align ? ` text--${align}` : ''}${isLight && !isAccent ? ' text--light' : ''}${isAccent && !isLight ? ' text--accent' : ''}`}>{children}</p>
    );
};

Text.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    align: PropTypes.string,
    isLight: PropTypes.bool,
    isAccent: PropTypes.bool,
};

export default Text;
