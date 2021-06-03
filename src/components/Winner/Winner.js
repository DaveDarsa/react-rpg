import React from "react";

const Winner = ({ winner }) => {
	return (
		<div className="winner" data-testid="winnerelement">
			Winner : {winner}
		</div>
	);
};

export default Winner;
