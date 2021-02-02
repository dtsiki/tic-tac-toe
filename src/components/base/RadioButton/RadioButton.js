import PropTypes from 'prop-types';
import React from 'react';

import Icon from './../Icon/';

import './style.scss';

const RadioButton = ({ name, label, onChange, activeState, value, id, className }) => {
    return (
        <div className={`radio-button${activeState === value ? ' radio-button--active' : ''}${className ? ` radio-button--${className}` : ''}`}>
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                className="radio-button__input"
                onChange={(value) => onChange(value)}
            />
            <label
                className="radio__label"
                htmlFor="singleMode"
            >
                {activeState === value && <Icon name="check" className="radio-button__icon" />} {label}
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    children: PropTypes.object,
    label:  PropTypes.string,
    onChange:  PropTypes.func,
    activeState:  PropTypes.string,
    value:  PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
};

export default RadioButton;
