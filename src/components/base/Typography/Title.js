import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ children, type }) => {
    switch (type) {
        case 'h1':
            return <h1 className={`title title--${type}`}>{children}</h1>;
        case 'h2':
            return <h2 className={`title title--${type}`}>{children}</h2>;
        case 'h3':
            return <h3 className={`title title--${type}`}>{children}</h3>;
        case 'h4':
            return <h4 className={`title title--${type}`}>{children}</h4>;
        case 'h5':
            return <h5 className={`title title--${type}`}>{children}</h5>;
        case 'h6':
            return <h6 className={`title title--${type}`}>{children}</h6>;
        default:
            return null;
    }
};

Title.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
};

export default Title;
