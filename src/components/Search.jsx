import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
	return (
		<FromStyled>
			<div>
				<FaSearch></FaSearch>
				<input type="text" />
			</div>
		</FromStyled>
	);
};

const FromStyled = styled.form`
	margin: 0 20rem;

	div {
		width: 100%;
		position: relative;
	}

	input {
		width: 100%;
		padding: 1rem 3rem;
		font-size: 1.5rem;
		color: #fff;
		background: linear-gradient(35deg, #494949, #313131);
		border: none;
		border-radius: 1rem;
		outline: none;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: #fff;
	}
`;

export default Search;
