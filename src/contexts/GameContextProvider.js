import React, { createContext, useReducer } from "react";
//game reducer
import { GameReducer } from "../reducers/GameReducer";

export const GameContext = createContext();

const GameContextProvider = (props) => {
	//store the rolls after each move dmg and defs for both players.
	//once theyve both played two turns, calculate dmg and also check if winner BUT if p1 gets enemy to 0 or less they win.

	const [gameSettings, dispatch] = useReducer(GameReducer, {
		setupComplete: false,
		winner: null,
	});

	return (
		<GameContext.Provider value={{ gameSettings, dispatch }}>
			{props.children}
		</GameContext.Provider>
	);
};
export default GameContextProvider;
