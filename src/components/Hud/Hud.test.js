import React from "react";
import { render } from "@testing-library/react";
import Hud from "./Hud";
import { PlayerContext } from "../../contexts/PlayerContextProvider";
describe("Hud tests", () => {
	test("Hud renders with correct usernames with hps", () => {
		const players = {
			playerOne: { name: "first", hp: 20 },
			playerTwo: { name: "second", hp: 20 },
		};
		const HudElem = render(
			<PlayerContext.Provider value={[players]}>
				<Hud />
			</PlayerContext.Provider>
		);

		expect(HudElem).toBeTruthy();
		//player1
		expect(HudElem.getByTestId("playeronename").textContent).toBe("first");
		expect(HudElem.getByTestId("playeronehp").textContent).toBe("20");
		//player2
		expect(HudElem.getByTestId("playertwoname").textContent).toBe("second");
		expect(HudElem.getByTestId("playertwohp").textContent).toBe("20");
	});
});
