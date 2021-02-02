import PropTypes from 'prop-types';
import React from 'react';

import { Text } from './../base/Typography/';
import { Container, ContainerContent, ContainerControl, ContainerTitle } from './../base/Container/';
import RadioButton from './../base/RadioButton';

const PlayerSettings = ({ step, firstPlayer, mode, selectPlayer, changePlayer }) => {
    if (step === 1) {
        return (
            <Container isActive={firstPlayer}>
                <ContainerTitle>Side</ContainerTitle>
                <ContainerContent hasTitle>
                    <Text align="center">{mode === "single" ? 'Pick your side' : 'Choose first move'}:</Text>
                    <RadioButton
                        label="X"
                        onChange={(value) => changePlayer(value)}
                        activeState={firstPlayer}
                        value="X"
                        id="playerX"
                        name="player"
                    />
                    <RadioButton
                        label="O"
                        onChange={(value) => changePlayer(value)}
                        activeState={firstPlayer}
                        value="0"
                        id="playerO"
                        name="player"
                    />
                </ContainerContent>
                {firstPlayer && (
                    <ContainerControl
                        onClick={selectPlayer}
                        position="bottom"
                        label="Select side"
                        icon="next"
                    />
                )}
            </Container>
        );
    } else return null;
};

PlayerSettings.propTypes = {
    step: PropTypes.number,
    mode: PropTypes.string,
	changePlayer: PropTypes.func,
    selectPlayer: PropTypes.func,
    firstPlayer: PropTypes.string,
};

export default PlayerSettings;
