import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate(`/searched/${input}`);
	};

	return (
		<FromStyled onSubmit={submitHandler}>
			<div>
				<FaSearch></FaSearch>
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					value={input}
				/>
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
