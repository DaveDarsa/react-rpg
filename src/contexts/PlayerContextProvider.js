import React, { useState, createContext } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
	const [players, setPlayers] = useState({});

	return (
		<PlayerContext.Provider value={[players, setPlayers]}>
			{props.children}
		</PlayerContext.Provider>
	);
};

export default PlayerContextProvider;
