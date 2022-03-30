import { useEffect, useState } from 'react';

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
			{popular.map((recipe) => (
				<div key={recipe.id}>
					<h2>{recipe.title}</h2>
					<img src={recipe.image} alt={recipe.title} />
					<p>{recipe.instructions}</p>
				</div>
			))}
		</div>
	);
};

export default Popular;
