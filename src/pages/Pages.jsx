import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cuisine" element={<Cuisine />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
