import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Game from "./Game";

describe("Game tests", () => {
	var currentPlayer = "player1";
	var turnType = "Attack";
	const setRoundDamage = () => {};
	const setCurrentPlayer = (newplayer) => {
		currentPlayer = newplayer;
	};
	const setAttacker = () => {};
	const setDefender = () => {};
	test("Game properly renders out player turn, damage, defense", async () => {
		const GameElem = render(
			<Game
				playerNames={["player1", "player2"]}
				setRoundEnd={() => {}}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setRoundDamage={setRoundDamage}
				attacker="player1"
				setAttacker={setAttacker}
				defender="player2"
				setDefender={setDefender}
				winner={null}
			/>
		);

		expect(GameElem.getByTestId("currentturn").textContent).toBe(
			`player1's Turn : ${turnType}`
		);
		expect(GameElem.getByTestId("attacker").textContent).toContain("player1");
		expect(GameElem.getByTestId("defender").textContent).toContain("player2");
		var btn = GameElem.getByTestId("button");

		//needs fixing
		// fireEvent.click(btn);

		// expect(await GameElem.findByTestId("currentturn").textContent).toContain(
		// 	"player2"
		// );
	});
});
