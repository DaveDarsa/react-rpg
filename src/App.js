import React from "react";
import { Switch, Route } from "react-router-dom";
//pages
//game configuration screen - player names/hp
import Configpage from "./pages/Configpage";
//gameplay screen
import Gamepage from "./pages/Gamepage";

//game settings and player contexts
import GameContextProvider from "./contexts/GameContextProvider";
import PlayerContextProvider from "./contexts/PlayerContextProvider";

//global style reset
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<GameContextProvider>
			<PlayerContextProvider>
				<GlobalStyles />
				<div className="App">
					<Switch>
						<Route exact path="/">
							<Gamepage />
						</Route>
						<Route path="/configure">
							<Configpage />
						</Route>
					</Switch>
				</div>
			</PlayerContextProvider>
		</GameContextProvider>
	);
}

export default App;
