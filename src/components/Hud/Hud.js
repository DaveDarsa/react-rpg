import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";

const Hud = () => {
	const [players] = useContext(PlayerContext);
	return (
		<div className="hud">
			<div className="player p1">
				<div className="name" data-testid="playeronename">
					{players.playerOne.name}
				</div>
				<div className="hp" data-testid="playeronehp">
					{players.playerOne.hp}
				</div>
			</div>
			<div className="player p2">
				<div className="name" data-testid="playertwoname">
					{players.playerTwo.name}
				</div>
				<div className="hp" data-testid="playertwohp">
					{players.playerTwo.hp}
				</div>
			</div>
		</div>
	);
};
export default Hud;
