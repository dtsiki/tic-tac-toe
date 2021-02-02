import React, { useState, useEffect } from 'react';

import Wrapper from './../../base/Wrapper';
import { Board, ModeSettings, Result, Info, PlayerSettings } from './../../game/index'

import './style.scss';

const Game = () => {
	const [cells, setCells] = useState(Array.from(Array(9).keys()));
	const [mode, setMode] = useState(null);
	const [firstPlayer, setFirstPlayer] = useState(null);
	const [secondPlayer, setSecondPlayer] = useState(null);
	const [winner, setWinner] = useState(null);
	const [move, setMove] = useState(null);
	const [step, setStep] = useState(0);
	const [draw, setDraw] = useState(false);
	const [isSettingsEmpty, setIsSettingsEmpty] = useState({ mode: null, player: null });
	const [isGameStarted, setGameStarted] = useState(false);

	useEffect(() => {
		findWinner(firstPlayer);
		findWinner(secondPlayer);
		checkDraw()
	}, [move, cells]);


	const findWinner = (player) => {
		if(
			(cells[0] === player && cells[1] === player && cells[2] === player) ||
			(cells[3] === player && cells[4] === player && cells[5] === player) ||
			(cells[6] === player && cells[7] === player && cells[8] === player) ||
			(cells[0] === player && cells[3] === player && cells[6] === player) ||
			(cells[1] === player && cells[4] === player && cells[7] === player) ||
			(cells[2] === player && cells[5] === player && cells[8] === player) ||
			(cells[0] === player && cells[4] === player && cells[8] === player) ||
			(cells[2] === player && cells[4] === player && cells[6] === player)
			) {
			console.log(player, ' is win!')
			setWinner(player)
			setStep(3);
		};
	};

	const checkDraw = () => {
		let hasAvailableCells = false;

		cells.map((cell, index) => {
			if (cell === index) hasAvailableCells = true;
		})

		if (!hasAvailableCells) {
			console.log('its draw')
			setDraw(true);
			setStep(3)
		}
	};


	const changeMode = (e) => {
		setMode(e.target.value);
	};

	const selectMode = () => {
		if (mode) {
			if (isSettingsEmpty.mode) {
				setIsSettingsEmpty({
					...isSettingsEmpty,
					mode: false,
				});
			}
			setStep(1);
		} else {
			setIsSettingsEmpty({
				...isSettingsEmpty,
				mode: true,
			});
		}
	};

	const changePlayer = (e) => {
		setFirstPlayer(e.target.value);
		if (e.target.value === "X") {
			setSecondPlayer("0");
		} else if (e.target.value === "0") {
			setSecondPlayer("X");
		}
	};

	const selectPlayer = () => {
		if (firstPlayer) {
			if (isSettingsEmpty.player) {
				setIsSettingsEmpty({
					...isSettingsEmpty,
					player: false,
				});
			}
			setMove(firstPlayer);
			setStep(2);
		} else {
			setIsSettingsEmpty({
				...isSettingsEmpty,
				player: true,
			});
		}
	};

	const getRandomCell = () => {
		return Math.floor(Math.random() * 9) + 0;
	};

	const checkRandomCell = (randomCell) => {
		let result = true;

		cells.map((cell, index) => {
			if((randomCell === index) && (cell !== index)) {
				result = false;
			}
		});

		return result;
	};

	const makeMove = () => {
		let randomCell = getRandomCell();
		console.log('random cell: ', randomCell)

		while (checkRandomCell(randomCell) === false) {
			randomCell = getRandomCell();
		}

		console.log('do new move at ' + randomCell + ' by ' + secondPlayer);

		return randomCell;
	};

	const clickCell = (index) => {
		setGameStarted(true);

		if(winner === null && !draw) {
			const currentCells = [...cells];
			if (mode === 'friend') {
				if (index === currentCells[index]) {
					currentCells[index] = move;
					setCells(currentCells);
					if (move === firstPlayer) setMove(secondPlayer);
					if (move === secondPlayer) setMove(firstPlayer);
				} else console.log('whoops cell already clicked')
			} else {
				findWinner(firstPlayer);
				findWinner(secondPlayer);
				if (move === secondPlayer) {
					findWinner(firstPlayer);
					findWinner(secondPlayer);
				}
				if (move === firstPlayer) {
					if (index === currentCells[index]) {
						setMove(secondPlayer);
						currentCells[index] = move;
						setCells(currentCells);
						const randomMove = makeMove();
						currentCells[randomMove] = secondPlayer;
						setMove(firstPlayer);
					}
				}
			}
		}
	};

	const restartGame = () => {
		setWinner(null);
		setFirstPlayer(null);
		setSecondPlayer(null);
		setMode(null);
		setDraw(false);
		setCells(Array.from(Array(9).keys()));
		setStep(0);
	};

	const tryAgain = () => {
		setWinner(null);
		setDraw(false);
		setCells(Array.from(Array(9).keys()));
		setStep(2);
		setMove(firstPlayer);
		setGameStarted(false);
	};

	return (
  		<Wrapper>
			{false && <Info
				cells={cells}
				step={step}
				mode={mode}
				firstPlayer={firstPlayer}
				secondPlayer={secondPlayer}
				move={move}
				winner={winner}
			/>}
			<ModeSettings
				step={step}
				mode={mode}
				isModeEmpty={isSettingsEmpty.mode}
				selectMode={() => selectMode()}
				changeMode={(value) => changeMode(value)}
			/>
			<PlayerSettings
				step={step}
				firstPlayer={firstPlayer}
				isPlayerEmpty={isSettingsEmpty.player}
				mode={mode}
				selectPlayer={() => selectPlayer()}
				changePlayer={(value) => changePlayer(value)}
			/>
			<Board
				step={step}
				cells={cells}
				clickCell={index => clickCell(index)}
				restartGame={restartGame}
				tryAgain={tryAgain}
				winner={winner}
				draw={draw}
				move={move}
				isGameStarted={isGameStarted}
			/>
			<Result
				step={step}
				winner={winner}
				draw={draw}
				restartGame={restartGame}
				tryAgain={tryAgain}
			/>


		{/*<SelectSide mode={mode} handlePlayer={player => handlePlayer(player)} />*/}

		{/*<MoveInfo move={move} />*/}

		{/*<Board cells={cells} onClick={index => handleCellClick(index)} />*/}
		{/*<button onClick={() => handleReset()}>Restart</button>*/}

		{/*<Result
		winner={winner}
		draw={draw}
		handleNextTry={() => handleNextTry()}
		handleReset={() => handleReset()}
		/>*/}
		</Wrapper>
	);
};

export default Game;
