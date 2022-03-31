import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
		);
		const data = await api.json();
		setPopular(data.recipes);
	};

	return (
		<div>
			<Wrapper>
				<h2>Popular Picks</h2>
				{popular.map((recipe) => (
					<Card>
						<div key={recipe.id}>
							<h3>{recipe.title}</h3>
							<img src={recipe.image} alt={recipe.title} />
						</div>
					</Card>
				))}
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	min-height: 20rem;
	border-radius: 2rem;
	overflow: hidden;

	img {
		border-radius: 2rem;
	}
`;

export default Popular;
