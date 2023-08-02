import { getSkills } from '@/api/queries.js';

export default async function Skills() {
	const skills = await getSkills();

	return (
		<section className="bg-dark-gray">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<h2 className="text-center mb-16">
					Skills<span className="text-redCol">.</span>
				</h2>
				<div className="flex gap-4 flex-wrap">
					{skills.map((skill) => (
						<span
							key={skill.id}
							className="py-2 flex items-center justify-center flex-grow px-11 rounded-lg bg-dark"
						>
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
