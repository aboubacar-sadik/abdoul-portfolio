import Link from 'next/link';
import { OutlinedBtnRed } from '@/components/Buttons';
import { BiLogoUpwork, BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';

export default function Hero() {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div className="flex flex-col lg:flex-row items-center justify-center h-screen md:h-[500px] lg:h-[630px] gap-4">
				<div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:flex-1">
					<h1 className="text-center lg:text-start">Illiassou Issoufou A. H</h1>
					<h2 className="text-2xl text-redCol text-center lg:text-start">
						Top Rated Upwork Virtual Assistant
					</h2>
					<p className="text-center lg:text-start">
						Hello! My name is Illiassou Issoufou Abdoul Hayyou, and I am a professional
						virtual assistant (a Top Rated Upwork Freelancer) with over 3 years of experience
						providing various services as outlined in the services section.{' '}
					</p>
					{/* Socials */}
					<div className="flex items-center gap-2">
						<a
							aria-label="Link to Illiassou upwork profile"
							href="https://www.upwork.com/freelancers/~01b4d2727a2d98ab0d"
							className="p-2 rounded-full bg-white transition-all duration-500 hover:bg-redCol group"
						>
							<BiLogoUpwork size={24} color="#17202C" className="group-hover:text-white" />
						</a>
						<a
							aria-label="Link to Illiassou linkedin profile"
							href="https://www.linkedin.com/in/illiassou-issoufou-abdoul-hayyou-085aa821a"
							className="p-2 rounded-full bg-white transition-all duration-500 hover:bg-redCol group"
						>
							<BiLogoLinkedin size={24} color="#17202C" className="group-hover:text-white" />
						</a>
						<a
							aria-label="Link to Illiassou facebook page"
							href="https://www.facebook.com/profile.php?id=100068814306300"
							className="p-2 rounded-full bg-white transition-all duration-500 hover:bg-redCol group"
						>
							<BiLogoFacebook size={24} color="#17202C" className="group-hover:text-white" />
						</a>
					</div>
					{/* Buttons group */}
					<div className="flex items-center justify-center lg:justify-start gap-8 mt-4">
						<Link aria-label="Link to about page" href="/about">
							<OutlinedBtnRed>About</OutlinedBtnRed>
						</Link>
						<button className="filled_btn">
							<Link aria-label="Link to contact page" href="/contact">
								Contact
							</Link>
						</button>
					</div>
				</div>
				<div className="lg:flex-1"></div>
			</div>
		</div>
	);
}
