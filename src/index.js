import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './index.css';

const Box = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);

	const boxVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			className="Box"
			initial="hidden"
			animate={controls}
			variants={boxVariants}
		></motion.div>
	);
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
