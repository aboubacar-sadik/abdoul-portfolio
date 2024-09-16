'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Categories({ categories }) {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();

	const category = searchParams.get('category');

	function handleTags(filter) {
		router.push(`${pathName}?category=${filter}`);
	}

	return (
		<div className="flex flex-col border-b md:flex-row border-redCol">
			<button onClick={() => handleTags('All')}>
				<p
					className={` ${
						category === 'All' || !category
							? 'bg-redCol text-white'
							: 'bg-none text-white hover:text-redCol'
					} h-11 flex cursor-pointer items-center justify-center px-8 `}
				>
					All
				</p>
			</button>
			{categories.map((filter) => (
				<button key={filter.id} onClick={() => handleTags(filter.name)}>
					<p
						className={` ${
							category === filter.name
								? 'bg-redCol text-white'
								: 'bg-none text-white hover:text-redCol'
						} h-11 flex cursor-pointer items-center justify-center px-8 `}
					>
						{filter.name}
					</p>
				</button>
			))}
		</div>
	);
}
