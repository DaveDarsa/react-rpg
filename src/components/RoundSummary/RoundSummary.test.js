import React from "react";
import { render } from "@testing-library/react";
import RoundSummary from "./RoundSummary";

//contexts
import { PlayerContext } from "../../contexts/PlayerContextProvider";
import { GameContext } from "../../contexts/GameContextProvider";

describe("Round summary tests", () => {
	test("Summary properly consumes contexts and renders accordingly", () => {
		var players = {
			playerOne: { name: "first", hp: 20 },
			playerTwo: { name: "second", hp: 20 },
		};

		const setPlayers = (newPlayers) => {
			players = newPlayers;
		};
		const dispatch = (obj) => {
			return true;
		};

		const RoundSummaryElem = render(
			<PlayerContext.Provider value={[players, setPlayers]}>
				<GameContext.Provider value={{ dispatch: dispatch }}>
					<RoundSummary
						setRoundEnd={() => {}}
						attacker={players.playerOne.name}
						defender={players.playerTwo.name}
						roundDamage={5}
					/>
				</GameContext.Provider>
			</PlayerContext.Provider>
		);

		expect(RoundSummaryElem.getByTestId("summaryelement")).toBeTruthy();
		expect(RoundSummaryElem.getByTestId("damagedealt").textContent).toBe(
			` Damage dealt to ${players.playerTwo.name}: `
		);
		expect(RoundSummaryElem.getByTestId("rounddmg").textContent).toBe(" 5 ");
	});
});
