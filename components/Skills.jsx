import { getSkills } from '@/api/queries';

export default async function Skills() {
	const skills = await getSkills();

	return (
		<section className="bg-dark-gray">
			<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<h2 className="mb-16 text-center">
					Skills<span className="text-redCol">.</span>
				</h2>
				<div className="flex flex-wrap gap-4">
					{skills.map((skill) => (
						<span
							key={skill._id}
							className="flex items-center justify-center flex-grow py-2 rounded-lg px-11 bg-dark"
						>
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
