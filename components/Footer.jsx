export default function Footer() {
	const date = new Date().getFullYear();
	return (
		<footer className=" bg-dark-gray">
			<div className="flex items-center justify-between h-20 px-2 m-auto text-sm font-extralight max-w-7xl sm:px-6 lg:px-8">
				<p className="">© {date}. Illiassou Issoufou Abdoul Hayyou</p>
				<p>
					Designed & Developed by{' '}
					<a
						aria-label="Link to developer Aboubacar Sadik portfolio website"
						className="underline text-redCol"
						href="https://aboubacarsadik.vercel.app/"
						target="_blank"
					>
						Aboubacar Sadik
					</a>
				</p>
			</div>
		</footer>
	);
}
