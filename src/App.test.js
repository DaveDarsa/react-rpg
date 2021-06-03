import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Routing tests", () => {
	test("Navigating pages", () => {
		const history = createMemoryHistory();
		render(
			<Router history={history}>
				<App />
			</Router>
		);

		//config page - initial
		expect(screen.getByText(/Game Setup/i)).toBeInTheDocument();

		//finish setting up
		userEvent.click(screen.getByText(/let's play/i), { button: 0 });

		//game page
		expect(screen.getByText(/Roll The Dice/i)).toBeInTheDocument();
	});
});
