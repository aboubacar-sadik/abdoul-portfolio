import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import Image from 'next/image';
import format from 'date-fns/format';
import { getLatestPosts } from '@/api/queries';

export default async function AsidePost() {
	const posts = await getLatestPosts();

	return (
		<div className="flex flex-col px-4 divide-y divide-border">
			{posts.map((post) => (
				<article key={post._id}>
					<Link
						aria-label="Link to blog post detail"
						href={post.slug}
						className="flex items-center gap-3 py-4 group"
					>
						<div className="relative flex-shrink-0 overflow-hidden rounded-full h-11 w-11">
							<Image
								src={post.coverImage}
								fill
								priority
								sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
								className="!relative object-cover w-full"
								alt={post.coverImageAlt}
							/>
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-base transition-all duration-300 group-hover:text-redCol">
								{post.title}
							</h3>
							<div className="flex gap-4 text-xs text-white">
								<span className="flex items-center gap-2">
									<FaUser />
									{post.author}
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
