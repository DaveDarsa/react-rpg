import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { GameContext } from "../contexts/GameContextProvider";
//components:
//HUD
import Hud from "../components/Hud/Hud";
//Game screen
import GameScreen from "../components/GameScreen";
//winner
import Winner from "../components/Winner/Winner";
//styles
import { StyledGamePage } from "../styles/GameStyles";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Gamepage = () => {
	//check if setup is complete and redirect if needed
	const {
		gameSettings: { setupComplete, winner },
	} = useContext(GameContext);

	if (!setupComplete) {
		return <Redirect to="/configure" />;
	}

	return (
		<StyledGamePage className="gamepage">
			<Hud />
			<Link to="/configure" className="configure">
				<FontAwesomeIcon icon={faCog} />
			</Link>

			<GameScreen winner={winner} />
			{winner && <Winner winner={winner} />}
		</StyledGamePage>
	);
};
export default Gamepage;
