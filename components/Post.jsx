import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import format from 'date-fns/format';
import { getPosts } from '@/api/queries';

export default async function Post() {
	const posts = await getPosts();

	return (
		<section>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((post) => (
					<article
						key={post._id}
						className="flex flex-col items-stretch overflow-hidden rounded-lg justify-stretch"
					>
						<div className="relative h-48">
							<Image
								src={post.coverImage}
								fill
								priority
								sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
								className="!relative object-cover w-full"
								alt={post.coverImageAlt}
							/>
						</div>
						<div className="flex flex-col h-full gap-4 p-5 pb-8 bg-dark ">
							<div className="flex items-center justify-between text-sm text-white">
								<span className="flex items-center gap-2 text-xs">
									<FaUser />
									{post.author}
								</span>
								<span className="flex items-center gap-2 text-xs">
									<FaCalendar />
									{format(new Date(post.publishedAt), 'MM-dd-yyyy')}
								</span>
							</div>
							<h2 className="text-lg">{post.title}</h2>
							<Link
								aria-label="Link to blog post page"
								href={`/posts/${post.slug}`}
								className="text-sm text-redCol"
							>
								Read more...
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
