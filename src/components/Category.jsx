import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

{
	/* <NavLink to={'/cuisine/Italian'}>
  <FaPizzaSlice />
  <h4>Italian</h4>
</NavLink>
<NavLink to={'/cuisine/American'}>
  <FaHamburger />
  <h4>American</h4>
</NavLink>
<NavLink to={'/cuisine/Chinese'}>
  <GiNoodles />
  <h4>Chinese</h4>
</NavLink>
<NavLink to={'/cuisine/Japanese'}>
  <GiChopsticks />
  <h4>Japanese</h4>
</NavLink> */
}

const Category = () => {
	return (
		<List>
			<div>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</div>
			<div>
				<FaHamburger />
				<h4>American</h4>
			</div>
			<div>
				<GiNoodles />
				<h4>Chinese</h4>
			</div>
			<div>
				<GiChopsticks />
				<h4>Japanese</h4>
			</div>
		</List>
	);
};

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
`;

export default Category;
