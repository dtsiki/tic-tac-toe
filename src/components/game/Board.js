import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../base/Typography/';
import Cell from './Cell';
import { Container, ContainerContent, ContainerControl, ContainerTitle } from './../base/Container/';

import './style.scss';

const Board = ({ step, winner, draw, cells, clickCell, tryAgain, restartGame, move, isGameStarted }) => {
    const renderBoard = (cells) => {
		let board = [];

		for(let i = 0; i < cells.length; i++) {
			board.push(renderCell(i, cells[i]));
		}

		return board;
    };

	const renderCell = (index, value) => {
		const cellValue = index === value ? '' : value;
		const disabled = (winner || draw) && index === value ? true : false;

		return (
			<Cell
				key={index}
				index={index}
				value={cellValue}
				onClick={() => clickCell(index)}
				disabled={disabled}
			/>
		);
	};

	if (step === 2 || step === 3) {
		return (
			<Container>
				<ContainerTitle>Tic Tac Toe</ContainerTitle>
				<ContainerContent hasTitle>
					{(!winner || !draw) && (
						<Text align="center" isAccent>Move: {move}</Text>
					)}
					<div className="board">
						{renderBoard(cells)}
					</div>
				</ContainerContent>
				<ContainerControl
					onClick={restartGame}
					position="right"
					label="Restart game"
					icon="close"
				/>
				{(!winner || !draw || isGameStarted) && (
					<ContainerControl
						onClick={tryAgain}
						position="bottom"
						label="Try again"
						icon="repeat"
					/>
				)}
			</Container>
		);
	} else return null;
};

Board.propTypes = {
	step: PropTypes.number,
	winner: PropTypes.string,
	draw: PropTypes.bool,
    cells: PropTypes.array,
	onClick: PropTypes.func,
	tryAgain: PropTypes.func,
	restartGame: PropTypes.func,
	move: PropTypes.string,
	isGameStarted: PropTypes.bool,
};

export default Board;
