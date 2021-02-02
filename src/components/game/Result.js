import PropTypes from 'prop-types';
import React from 'react';

import Button from './../base/Button';
import Message from './../base/Message'

const Result = ({ winner, draw, step, restartGame, tryAgain }) => {
	const ResultControls = () => {
		return (
			<>
				<Button onClick={restartGame} type="primary">Restart</Button>
				<Button onClick={tryAgain} type="secondary">Try again</Button>
			</>
		);
	};

	if (step === 3) {
		return (
			<Message
				type={winner ? 'success' : draw ? 'info' : 'error'}
				title={winner ? `Wow, ${winner} win!` : draw ? `Yay, it's draw` : ''}
				content={<ResultControls/>}
			/>
		);
	} else return null;
};

Result.propTypes = {
	step: PropTypes.number,
	winner: PropTypes.string,
	draw: PropTypes.bool,
	tryAgain: PropTypes.func,
	restartGame: PropTypes.func,
};

export default Result;
