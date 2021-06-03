import React from "react";
import Winner from "./winner";
import { render } from "@testing-library/react";

describe("Winner element tests", () => {
	test("Winner is correctly displayed", () => {
		const WinnerElem = render(<Winner winner={"Player one"} />);

		expect(WinnerElem.getByTestId("winnerelement").textContent).toBe(
			"Winner : Player one"
		);
	});
});
