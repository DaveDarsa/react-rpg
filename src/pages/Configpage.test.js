import { render, fireEvent } from "@testing-library/react";
import Configpage from "./Configpage";

import { GameContext } from "../contexts/GameContextProvider";
import { PlayerContext } from "../contexts/PlayerContextProvider";
import { MemoryRouter } from "react-router";

test("Imputs are rendered", () => {
	const dispatch = () => {};
	const setPlayers = (obj) => {
		// {
		//obj frmat
		// 	playerOne: { name: player1, hp: HP },
		// 	playerTwo: { name: player2, hp: HP },
		// };
	};

	const ConfigpageElem = render(
		<PlayerContext.Provider value={[, setPlayers]}>
			<GameContext.Provider value={{ dispatch: dispatch }}>
				<MemoryRouter>
					<Configpage />
				</MemoryRouter>
			</GameContext.Provider>
		</PlayerContext.Provider>
	);
	const p1input = ConfigpageElem.getByTestId("player1name");
	const p2input = ConfigpageElem.getByTestId("player2name");
	const hp = ConfigpageElem.getByTestId("hp");
	expect(p1input).toBeTruthy();
	expect(p2input).toBeTruthy();
	expect(hp).toBeTruthy();
});

test("Input change", () => {
	const dispatch = () => {};
	const setPlayers = (obj) => {};

	const ConfigpageElem = render(
		<PlayerContext.Provider value={[, setPlayers]}>
			<GameContext.Provider value={{ dispatch: dispatch }}>
				<MemoryRouter>
					<Configpage />
				</MemoryRouter>
			</GameContext.Provider>
		</PlayerContext.Provider>
	);
	const p1input = ConfigpageElem.getByTestId("player1name");
	const p2input = ConfigpageElem.getByTestId("player2name");
	const hp = ConfigpageElem.getByTestId("hp");

	fireEvent.change(p1input, { target: { value: "testp1" } });
	expect(p1input.value).toBe("testp1");

	fireEvent.change(p2input, { target: { value: "testp2" } });
	expect(p2input.value).toBe("testp2");

	fireEvent.change(hp, { target: { value: "testHP" } });
	expect(hp.value).toBe("testHP");
});
