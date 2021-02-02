import PropTypes from 'prop-types';
import React from 'react';

import Icon from './../base/Icon/';

const Cell = ({ index, value, onClick, disabled }) => {
	return (
		<button
			onClick={() => onClick(index)}
			className={`cell${disabled ? ' cell--disabled' : ''}`}
		>
			<span className="cell__index">{index}</span>
			{value === 'X' && (
				<Icon name="cross" className="cell__icon cell__icon--cross" />
			)}
			{value === '0'&& (
				<Icon name="circle" className="cell__icon cell__icon--circle" />
			)}
		</button>
	);
};

Cell.propTypes = {
    onClick: PropTypes.func,
    index: PropTypes.number,
	value: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Cell;
