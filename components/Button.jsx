'use client';

import { useRef } from 'react';

export default function Button({ children }) {
	const btnEl = useRef(null);

	const handleMouseOver = (event) => {
		const x = event.pageX - btnEl.current.offsetLeft;
		const y = event.pageY - btnEl.current.offsetTop;

		btnEl.current.style.setProperty('--xPos', x + 'px');
		btnEl.current.style.setProperty('--yPos', y + 'px');
	};

	return (
		<button className="outlined_btn" ref={btnEl} onMouseOver={handleMouseOver}>
			<span>{children}</span>
		</button>
	);
}
