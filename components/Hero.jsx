import Link from 'next/link';
import { OutlinedBtnRed } from '@/components/Buttons';

export default function Hero() {
	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div className="flex flex-col lg:flex-row items-center justify-center h-screen md:h-[500px] lg:h-[630px] gap-4">
				<div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:flex-1">
					<h1 className="text-center lg:text-start">Illiassou Issoufou A. H</h1>
					<h3 className="text-redCol text-center lg:text-start">Freelancer</h3>
					<p className="text-center lg:text-start">
						Hello! My name is Illiassou Issoufou Abdoul Hayyou, and I am a professional
						virtual assistant (a Top Rated Upwork Freelancer) with over 3 years of experience
						providing various services as outlined in the services section.{' '}
					</p>
					<div className="flex items-center justify-center lg:justify-start gap-8 mt-4">
						<Link href="/about">
							<OutlinedBtnRed>About</OutlinedBtnRed>
						</Link>
						<button className="filled_btn">
							<Link href="/contact">Contact</Link>
						</button>
					</div>
				</div>
				<div className="lg:flex-1"></div>
			</div>
		</div>
	);
}
