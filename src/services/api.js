import axios from "axios";
import API_KEY from "./key";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const getImages = async (values, page) => {
	const res = await axios.get(
		`?q=${values}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12"`,
	);
	return res.data;
};
