import { Box } from "../box/box";
import { Component } from "react";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";
import PropTypes from "prop-types";
export class ImageGalleryItem extends Component {
	state = {
		showModal: false,
	};

	toggleModal = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
		}));
	};

	render() {
		const { img, tags, modalImg } = this.props;
		const { showModal } = this.state;
		return (
			<Box>
				<GalleryItem onClick={this.toggleModal}>
					<GalleryItemImage src={img} alt={tags} />
				</GalleryItem>
				{showModal && <Modal img={modalImg} tags={tags} onCloseModal={this.toggleModal} />}
			</Box>
		);
	}
}
ImageGalleryItem.propTypes = {
	img: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	modalImg: PropTypes.string.isRequired,
};
