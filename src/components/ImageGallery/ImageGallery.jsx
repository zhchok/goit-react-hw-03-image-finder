import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
export const ImageGallery = ({ items }) => {
	return (
		<ImageGalleryList>
			{items.map(item => {
				return (
					<ImageGalleryItem key={item.id} img={item.webformatURL} modalImg={item.largeImageURL} tags={item.tags} />
				);
			})}
		</ImageGalleryList>
	);
};

ImageGallery.propTypes = {
	items: PropTypes.array.isRequired,
};
