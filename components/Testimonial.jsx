import Image from 'next/image';
import React from 'react';
import quote from '@/public/svg/quote.svg';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

export default function Testimonial() {
	return (
		<section>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
					<div className="lg:w-1/2 mb-16">
						<h2>
							What They Say <br /> About Me.
						</h2>
						<p>
							Various versions have evolved over the years, sometimes by accident, sometimes
							on purpose (injected humour and the like).
						</p>
					</div>
					<div className="lg:w-1/2 flex flex-col gap-4">
						<div className="p-4 pt-8 md:p-16 bg-dark-gray rounded-lg flex flex-col  gap-8">
							<Image
								src={quote}
								width={54}
								height={48}
								alt="single quote icon"
								className=" -my-4"
							/>
							<p className=" italic">
								Abdoul was very good with his job. The data quality was high & he was always
								prompt in his replies & kept us updated throughout the project. Highly
								recommended. I will use his services again in the future.{' '}
							</p>
							<div className="flex gap-3 items-center justify-end">
								<div className="rounded-full w-11 h-11 bg-white"></div>
								<div>
									<h4 className="text-base">Aboubacar sadik</h4>
									<p className="text-xs text-redCol">CEO Google</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center gap-3">
							<button className="p-4 transition-all duration-300 hover:text-redCol">
								<FaArrowLeftLong />
							</button>
							<div className="flex items-center justify-center gap-2">
								<span className="block w-3 h-3 rounded-full bg-dark-gray"></span>
								<span className="block w-3 h-3 rounded-full bg-dark-gray"></span>
								<span className="block w-3 h-3 rounded-full bg-white"></span>
								<span className="block w-3 h-3 rounded-full bg-dark-gray"></span>
							</div>
							<button className="p-4 transition-all duration-300 hover:text-redCol">
								<FaArrowRightLong />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
