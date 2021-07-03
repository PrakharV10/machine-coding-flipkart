import React from 'react';
import Description from './Components/Description/Description';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
	return (
		<div className='App w-screen bg-white'>
			<Navbar />
			<main className='w-screen flex mb-4'>
				<Sidebar />
				<Description />
			</main>
		</div>
	);
}

export default App;
