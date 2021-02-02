import PropTypes from 'prop-types';
import React from 'react';

const Info = ({ cells, step, mode, firstPlayer, secondPlayer, move, winner }) => {
	const getCells = () => {
		return cells.map(cell => {
			return cell + ', ';
		});
	};

	return (
		<div>
			<div>step: {step}</div>
			<div>Mode: {mode}</div>
			<div>1st player: {firstPlayer}</div>
			<div>2rd player: {secondPlayer}</div>
			<div>cells: {getCells()}</div>
			<div>Move: {move}</div>
			<div>Winner: {winner}</div>
		</div>
	);
};

Info.propTypes = {
	cells: PropTypes.array,
	step: PropTypes.number,
	mode: PropTypes.string,
	firstPlayer: PropTypes.string,
	secondPlayer: PropTypes.string,
	move: PropTypes.string,
	winner: PropTypes.string,
};

export default Info;
