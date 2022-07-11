import { Serachbar, SearchForm, SearchInput, SearchButton, SearchButtonLabel } from "./Searchbar.styled";
import { Formik } from "formik";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};
	return (
		<Serachbar>
			<Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
				<SearchForm>
					<SearchButton type="search">
						<SearchButtonLabel />
					</SearchButton>
					<SearchInput type="text" name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
				</SearchForm>
			</Formik>
		</Serachbar>
	);
};
Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
