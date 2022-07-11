import { Button } from "./LoadMore.styled";
import { Box } from "../box/box";
import PropTypes from "prop-types";

export const LoadMore = ({ onClick }) => {
	return (
		<Box width="100%" textAlign="center" my="10px">
			<Button onClick={onClick}>Load more</Button>
		</Box>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
};
