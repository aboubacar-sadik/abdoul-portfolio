import { getServices } from '@/api/queries';
import Image from 'next/image';
import check from '@/public/svg/check.svg';
import { BsCheckSquareFill } from 'react-icons/bs';

export default async function Services() {
	const services = await getServices();

	return (
		<section>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<h2 className="text-center mb-16">
					Services<span className="text-redCol">.</span>
				</h2>
				<div className="border border-r-0 border-border rounded-lg overflow-hidden flex flex-col last:border-b-0">
					{services &&
						services.map((service) => (
							<div
								key={service.id}
								className="flex flex-col lg:flex-row border-b border-border lg:h-72"
							>
								<div className="w-full lg:w-2/3 px-4 lg:px-8 py-6 lg:py-11 flex flex-col items-start justify-center gap-2">
									<h3>{service.name}</h3>
									<p>{service.description}</p>
								</div>
								<div className="w-full lg:w-1/3 bg-redCol p-4 lg:p-8 flex items-center justify-start">
									<ul className=" space-y-3">
										{service.servicesList.map((item, i) => (
											<li key={i} className="flex items-start gap-2 text-sm">
												<BsCheckSquareFill className=" shrink-0 mt-1" />
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
