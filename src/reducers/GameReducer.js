export const GameReducer = (state, action) => {
	switch (action.type) {
		case "COMPLETE_SETUP":
			return { ...state, setupComplete: true };
		case "ANNOUNCE_WINNER":
			return { ...state, winner: action.winner };
		default:
			return state;
	}
};
