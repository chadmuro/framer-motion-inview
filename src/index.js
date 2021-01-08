import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Box = () => {
	return <div className="Box"></div>;
};

const App = () => {
	return (
		<div className="App">
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
			<Box />
		</div>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
