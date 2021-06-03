import styled from "styled-components";

export const StyledGamePage = styled.div`
	height: 100vh;
	color: white;
	background-color: purple;
	position: relative;
	.configure {
		color: white;
		font-size: 2.5rem;
		position: absolute;
		right: 5rem;
		top: 1.8rem;
	}
	.hud {
		border-bottom: 1px solid black;
		padding: 2rem 10rem;
		color: white;
		font-weight: bold;
		display: flex;
		justify-content: space-between;

		.player {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			font-size: 1.6rem;
			width: 20rem;
			.hp {
				text-align: center;
				width: 10rem;
				padding: 0.2rem;
				background-color: green;
			}
		}
	}
	.winner {
		font-size: 5rem;
		text-align: center;
	}
`;
