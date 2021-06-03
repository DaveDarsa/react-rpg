import React, { useState, useContext } from "react";
import { GameContext } from "../contexts/GameContextProvider";
import { PlayerContext } from "../contexts/PlayerContextProvider";
//redirect HOC
import { withRouter } from "react-router-dom";
//styles
import { StyledConfig } from "../styles/ConfigStyles";

const Configpage = (props) => {
	const { dispatch } = useContext(GameContext);
	const [, setPlayers] = useContext(PlayerContext);

	//form state
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [HP, setHP] = useState(20);
	const handleSubmit = (e) => {
		e.preventDefault();
		//update state in contexts

		setPlayers({
			playerOne: { name: player1, hp: HP },
			playerTwo: { name: player2, hp: HP },
		});
		dispatch({ type: "COMPLETE_SETUP" });
		setPlayer1("");
		setPlayer2("");
		setHP(0);
		//redirect to gamepage
		props.history.push("/");
	};
	return (
		<StyledConfig>
			<form onSubmit={handleSubmit}>
				<p>Game Setup</p>
				<div className="formgroup">
					<label htmlFor="player1">Player 1 name</label>
					<input
						type="text"
						data-testid="player1name"
						onChange={(e) => setPlayer1(e.target.value)}
						name="player1"
						value={player1}
						required
					/>
				</div>
				<div className="formgroup">
					<label htmlFor="player2">Player 2 name</label>
					<input
						type="text"
						data-testid="player2name"
						onChange={(e) => setPlayer2(e.target.value)}
						name="player2"
						value={player2}
						required
					/>
				</div>
				<div className="formgroup">
					<label htmlFor="HP">Maximum Hp</label>
					<input
						type="text"
						data-testid="hp"
						onChange={(e) => setHP(e.target.value)}
						name="HP"
						value={HP}
						required
					/>
				</div>
				<input type="submit" value="Let's play!" />
			</form>
		</StyledConfig>
	);
};
export default withRouter(Configpage);
