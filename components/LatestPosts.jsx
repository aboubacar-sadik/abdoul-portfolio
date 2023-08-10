import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import Image from 'next/image';
import format from 'date-fns/format';

export default function AsidePost({ posts }) {
	return (
		<div className="flex flex-col divide-y divide-border px-4">
			{posts.map((post) => (
				<article key={post.id}>
					<Link href={post.slug} className="group flex items-center gap-3 py-4">
						<div className="rounded-full flex-shrink-0 overflow-hidden relative h-11 w-11">
							<Image
								src={post.coverImage.url}
								fill
								priority
								sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
								className="!relative object-cover w-full"
								alt={post.coverImage.fileName}
							/>
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="group-hover:text-redCol transition-all duration-300 text-base">
								{post.title}
							</h3>
							<div className="text-white flex text-xs gap-4">
								<span className="flex items-center gap-2">
									<FaUser />
									{post.author.name}
								</span>
								<span className="flex items-center gap-2">
									<FaCalendar />
									{format(new Date(post.publishedAt), 'MM-dd-yyyy')}
								</span>
							</div>
						</div>
					</Link>
				</article>
			))}
		</div>
	);
}
