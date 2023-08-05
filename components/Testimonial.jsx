import { getTestimonials } from '@/api/queries';
import Slider from './Slider';

export default async function Testimonial() {
	const testimonials = await getTestimonials();

	return (
		<section>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
					{/* ===== Section title ===== */}
					<div className="lg:w-1/2 mb-16">
						<h2>
							What They Say <br /> About Me.
						</h2>
						<p>Discover the impact I’ve had through the words of others.</p>
					</div>
					{/* ===== Slide + Pagination container ===== */}
					<div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4">
						<Slider testimonials={testimonials} />
					</div>
				</div>
			</div>
		</section>
	);
}
