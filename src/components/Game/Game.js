import React, { useState, useEffect } from "react";
import { roll } from "../../utils/roll.js";

const Game = ({
	playerNames,
	setRoundEnd,
	currentPlayer,
	setCurrentPlayer,
	setRoundDamage,
	attacker,
	setAttacker,
	defender,
	setDefender,
	winner,
}) => {
	//must finish the round after both players play a turn

	//once turnCount is 2, meaning both players played their turn, the round ends, damage gets calculated and player roles flip
	const [turnCount, setTurnCount] = useState(0);

	const [turnType, setTurnType] = useState("Attack");

	const [attack, setAttack] = useState(null);
	const [defense, setDefense] = useState(null);
	const [buttonShowing, setButtonShowing] = useState(true);

	//after both players played a turn the round ends, hp gets updated and state resets
	useEffect(() => {
		if (turnCount === 2) {
			setRoundEnd(true);
			//attacker and defender change here

			setRoundDamage(attack - defense);
			//reset
			setTurnCount(0);
			setTimeout(() => {
				//reset attacks
				setAttack(null);
				setDefense(null);
				//swap roles
				setCurrentPlayer(defender);
				setAttacker(defender);
				setDefender(attacker);
			}, 1000);
		}
	}, [turnCount]);

	const rollDice = () => {
		//after each turn currentPlayer changes
		var updatedCurrentPlayer = playerNames.filter((name) => {
			return name !== currentPlayer;
		})[0];

		setTimeout(() => {
			setCurrentPlayer(updatedCurrentPlayer);
		}, 1000);

		const rolledNumber = roll(1, 6);

		//based on the last type of attack, change it to it's oppsite and save attack/defense amount.
		if (turnType === "Attack") {
			setTimeout(() => {
				setTurnType("Defense");
			}, 1000);

			setAttack(rolledNumber);
		} else {
			setTimeout(() => {
				setTurnType("Attack");
			}, 1000);

			setDefense(rolledNumber);
		}
		//increment the turncount
		setTurnCount(turnCount + 1);

		//hide the button until next players turn
		setButtonShowing(false);
		setTimeout(() => {
			setButtonShowing(true);
		}, 1000);
	};
	return (
		<div className="game">
			<p className="currentturn" data-testid="currentturn">
				{currentPlayer}'s Turn : {turnType}
			</p>
			<p className="attacker" data-testid="attacker">
				{attacker}'s damage: {attack}
			</p>
			<p className="defender" data-testid="defender">
				{defender}'s defense: {defense}
			</p>
			{buttonShowing && !winner && (
				<button data-testid="button" onClick={() => rollDice()}>
					Roll The Dice
				</button>
			)}
		</div>
	);
};

export default Game;
