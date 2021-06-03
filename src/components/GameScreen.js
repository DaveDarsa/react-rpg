import React, { useState, useContext } from "react";
//player context
import { PlayerContext } from "../contexts/PlayerContextProvider";
//gameplay screen
import Game from "./Game/Game";
//round summary
import RoundSummary from "./RoundSummary/RoundSummary";

const GameScreen = ({ winner }) => {
	//must change each turn and also have a summary at the end of each round
	//players
	const [players] = useContext(PlayerContext);

	const playerNames = Object.values(players).map((item) => {
		return item.name;
	});
	//attacker and defenders - roles change after each turn
	const [attacker, setAttacker] = useState(playerNames[0]);
	const [defender, setDefender] = useState(playerNames[1]);
	const [currentPlayer, setCurrentPlayer] = useState(playerNames[0]);
	//damage done in round
	const [roundDamage, setRoundDamage] = useState(0);
	//roundEnd  - shwows summary at round end
	const [roundEnd, setRoundEnd] = useState(false);

	return (
		<div className="gamescreen">
			<Game
				playerNames={playerNames}
				setRoundEnd={setRoundEnd}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setRoundDamage={setRoundDamage}
				attacker={attacker}
				setAttacker={setAttacker}
				defender={defender}
				setDefender={setDefender}
				winner={winner}
			/>
			{roundEnd && (
				<RoundSummary
					setRoundEnd={setRoundEnd}
					attacker={attacker}
					defender={defender}
					roundDamage={roundDamage}
				/>
			)}
		</div>
	);
};

export default GameScreen;
