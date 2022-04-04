import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Pages from './pages/Pages';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
};

export default App;
