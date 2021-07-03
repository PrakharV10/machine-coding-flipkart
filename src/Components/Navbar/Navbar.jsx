import React from 'react';

function Navbar() {
	return (
		<div className='w-screen h-14 shadow-md p-2 bg-blue-600 flex justify-between items-center sticky top-0 z-30'>
			<div className='text-lg font-semibold text-white md:ml-20'>PVkart</div>
			<button className='px-2 py-1 bg-white text-blue-600 md:mr-20 font-medium'>
				Logout
			</button>
		</div>
	);
}

export default Navbar;
