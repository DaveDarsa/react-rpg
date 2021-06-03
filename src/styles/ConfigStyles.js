import styled from "styled-components";

export const StyledConfig = styled.div`
	background-color: teal;
	color: white;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	form {
		text-align: center;
		margin-bottom: 20rem;
		border: 3px solid black;
		border-radius: 1rem;
		padding: 5rem;
		font-size: 1.5rem;
		.formgroup {
			padding: 2rem;
		}
		label {
			font-weight: 600;
		}
		input[type="text"] {
			margin-left: 2rem;
			padding: 0.2rem;
			outline-color: teal;
		}
		input[type="submit"] {
			padding: 1.2rem 1.5rem;
			margin-top: 1rem;
		}
	}
`;
