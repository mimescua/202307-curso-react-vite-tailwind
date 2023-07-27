import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function NavBar() {
	const { count } = React.useContext(ShoppingCartContext);
	const activeStyle = 'underline underline-offset-4';

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/clothes"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/electronics"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/furniture"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furniture
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/toys"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/others"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-balck/60">willsome@mail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign In
					</NavLink>
				</li>
				<li className='flex items-center'>
					<ShoppingCartIcon className="h-6 w-6 text-black" />
					<span className=' text-xs'>{count ? count : ''}</span>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
