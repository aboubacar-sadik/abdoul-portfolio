'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import quote from '@/public/svg/quote.svg';
import { register } from 'swiper/element/bundle';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import { BiSolidUserCircle } from 'react-icons/bi';
register();

export default function Slider({ testimonials }) {
	const swiperRef = useRef(null);

	useEffect(() => {
		const swiperContainer = swiperRef.current;
		const params = {
			effect: 'coverflow',
			navigation: {
				nextEl: '.next-slide',
				prevEl: '.prev-slide',
			},
			autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 500,
			loop: true,
			pagination: true,
			//add this
			injectStyles: [
				`
		  .swiper-pagination-bullet {
			  background-color: #fff;
		}
      `,
			],
		};

		Object.assign(swiperContainer, params);
		swiperContainer.initialize();
	}, []);

	return (
		<>
			{/* ===== Single Slide ===== */}
			<swiper-container ref={swiperRef} init="false" class=" overflow-hidden rounded-lg">
				{testimonials.map((testimonial) => (
					<swiper-slide
						key={testimonial.id}
						class="p-4 pt-8 md:p-16 h-auto bg-dark-gray flex flex-col border-0 gap-8 rounded-lg"
					>
						<Image
							src={quote}
							width={0}
							height={0}
							alt="single quote icon"
							className=" -my-4 !w-14 !h-12"
						/>
						{/* ===== Testimonial content ===== */}
						<p className="font-normal italic">{testimonial.testimonialContent}</p>
						{/* ===== Display client image condition ===== */}
						<div className="flex gap-3 items-center justify-end">
							{testimonial.clientImage?.url ? (
								<div className="rounded-full w-11 h-11 bg-white">
									<Image
										src={testimonial.clientImage.url}
										width={44}
										height={44}
										alt={testimonial.client}
										className="w-full object-cover"
									/>
								</div>
							) : (
								<div>
									<BiSolidUserCircle size={50} className=" text-dark" />
								</div>
							)}
							{/* ===== Client infos ===== */}
							<div>
								<h4 className="font-semibold text-base">{testimonial.client}</h4>
								<div className="text-xs text-redCol">
									<span>{testimonial.clientPosition}</span>
									{testimonial?.country && <span> • {testimonial.country}</span>}
								</div>
							</div>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
			{/* ===== Pagination ===== */}
			<div className="flex items-center justify-center gap-1">
				<button
					type="button"
					className="prev-slide p-2 transition-all duration-300 hover:text-redCol"
				>
					<FaArrowLeftLong size={24} />
				</button>
				<button
					type="button"
					className="next-slide p-2 transition-all duration-300 hover:text-redCol"
				>
					<FaArrowRightLong size={24} />
				</button>
			</div>
		</>
	);
}
