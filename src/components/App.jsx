import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import { Searchbar } from "./Searchbar/Searchbar.jsx";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery.jsx";
import { getImages } from "services/api";
import { LoadMore } from "./LoadMore/LoadMore.jsx";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";

let allImages;

export class App extends Component {
	state = {
		images: [],
		query: "",
		page: 1,
		loading: false,
	};

	componentDidUpdate(_, prevState) {
		if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
			this.addImage();
		}
	}

	addImage = async () => {
		const { query, page } = this.state;
		this.setState({ loading: true });

		try {
			const images = await getImages(query, page);
			allImages = images.total;
			if (allImages === 0) {
				Notify.failure("Images not found");
			}

			this.setState(prevState => ({
				images: [...prevState.images, ...images.hits],
			}));
		} catch (error) {
			this.setState({ loading: false });
			Notify.failure("Wow error, reload page");
		} finally {
			this.setState({ loading: false });
			Loading.remove();
		}
	};

	addQuery = ({ query }) => {
		this.setState({ query, page: 1, images: [] });
	};

	loadMore = () => {
		this.setState(prevState => ({
			page: prevState.page + 1,
		}));
	};

	render() {
		const { loading, images } = this.state;
		return (
			<Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
				<GlobalStyle />
				<Searchbar onSubmit={this.addQuery} />
				{loading && Loading.dots()}
				<ImageGallery items={images} />
				{images.length > 0 && images.length < allImages && <LoadMore onClick={this.loadMore} />}
			</Box>
		);
	}
}
