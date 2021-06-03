import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";
import { GameContext } from "../../contexts/GameContextProvider";

const RoundSummary = ({ setRoundEnd, attacker, defender, roundDamage }) => {
	const [players, setPlayers] = useContext(PlayerContext);
	const { dispatch } = useContext(GameContext);

	//find the defender in the state and safely modify it if damage was done
	useEffect(() => {
		//end the round after summary is shown;
		let timeoutId = setTimeout(() => {
			setRoundEnd(false);
		}, 1000);

		const updateState = () => {
			let copyState = { ...players };
			copyState[found.key] = found.val;
			setPlayers(copyState);
		};

		//check if there was some damage done during the round
		if (roundDamage > 0) {
			//defender object in the state
			var found;
			for (const [key, value] of Object.entries(players)) {
				if (value.name === defender) {
					found = { key: key, val: value };
				}
			}
			//update hp and check if a player won
			found.val.hp = found.val.hp - roundDamage;
			//checking if the defender lost
			if (found.val.hp <= 0) {
				//to display 0 on the hud
				found.val.hp = 0;
				updateState();
				dispatch({ type: "ANNOUNCE_WINNER", winner: attacker });
				return;
			}
			updateState();
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [roundDamage]);
	//shows round summary and also resets the game round
	return (
		<div className="summary" data-testid="summaryelement">
			<span data-testid="damagedealt"> Damage dealt to {defender}: </span>
			<span data-testid="rounddmg"> {roundDamage > 0 ? roundDamage : 0} </span>
		</div>
	);
};
export default RoundSummary;
