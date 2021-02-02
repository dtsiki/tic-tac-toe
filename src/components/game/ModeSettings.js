import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../base/Typography/';
import { Container, ContainerContent, ContainerControl, ContainerTitle } from './../base/Container/';
import RadioButton from './../base/RadioButton';

const ModeSettings = ({ step, mode, changeMode, selectMode }) => {
	if (step === 0) {
		return (
			<Container isActive={mode}>
				<ContainerTitle>Mode</ContainerTitle>
				<ContainerContent hasTitle>
					<Text align="center">Select game mode:</Text>
					<RadioButton
						label="Single"
						onChange={(value) => changeMode(value)}
						activeState={mode}
						value="single"
						id="singleMode"
						name="mode"
						className="block"
					/>
					<RadioButton
						label="With friend"
						onChange={(value) => changeMode(value)}
						activeState={mode}
						value="friend"
						id="friendMode"
						name="mode"
						className="block"
					/>
				</ContainerContent>
				{mode && (
					<ContainerControl
						onClick={selectMode}
						position="bottom"
						label="Select mode"
						icon="next"
					/>
				)}
			</Container>
		);
	} else return null;
};

ModeSettings.propTypes = {
	step: PropTypes.number,
	changeMode: PropTypes.func,
	selectMode: PropTypes.func,
	mode: PropTypes.string,
};

export default ModeSettings;
