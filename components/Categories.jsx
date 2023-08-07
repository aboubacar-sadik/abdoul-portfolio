import React from 'react';

export default function Categories() {
	return (
		<div className="flex flex-col md:flex-row border-b border-redCol">
			<p className=" h-11 flex cursor-pointer items-center justify-center px-8 bg-redCol text-white">
				Tomess
			</p>
			<p className=" h-11 flex cursor-pointer hover:text-white items-center justify-center px-8 text-redCol">
				Tomess
			</p>
			<p className=" h-11 flex cursor-pointer hover:text-white items-center justify-center px-8 text-redCol">
				Tomess
			</p>
			<p className=" h-11 flex cursor-pointer visited:text-white hover:text-white items-center justify-center px-8 text-redCol">
				Tomess
			</p>
		</div>
	);
}
