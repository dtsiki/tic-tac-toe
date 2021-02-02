import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Button = ({ children, onClick, type }) => {
    return (
        <button
            className={`button${type ? ` button--${type}` : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.object,
    onClick:  PropTypes.func,
    type:  PropTypes.string,
};

export default Button;