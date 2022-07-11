import { Component } from "react";
import { ModalOver, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = e => {
		if (e.code === "Escape") {
			this.props.onCloseModal();
		}
	};

	handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.onCloseModal();
		}
	};

	render() {
		const { img, tags } = this.props;
		return (
			<ModalOver onClick={this.handleBackdropClick}>
				<ModalWindow>
					<img src={img} alt={tags} />
				</ModalWindow>
			</ModalOver>
		);
	}
}

Modal.propTypes = {
	img: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	onCloseModal: PropTypes.func.isRequired,
};
