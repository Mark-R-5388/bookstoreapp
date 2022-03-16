import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log('ran');
		callBackEndApi()
			.then((res) => {
				console.log(res);
				setData(res);
			})
			.catch((err) => console.log(err));
	}, []);

	const callBackEndApi = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	return (
		<div className='App'>
			<Header />
			<main>
				<h1>Content goes here</h1>
				<h2>Filling up space</h2>
				<h3>Just figurign out the spacing needed</h3>
				{data.length > 0 &&
					data.map((item) => (
						<div key={item._id}>
							<h1>{item.title}</h1>
							<h2>By: {item.author}</h2>
							<p>{item.pages} pages</p>
							<p>{item.genre}</p>
						</div>
					))}
			</main>
			<Footer />
		</div>
	);
};

export default App;
