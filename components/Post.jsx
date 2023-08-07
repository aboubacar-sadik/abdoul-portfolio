import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import format from 'date-fns/format';

export default function Post({ posts }) {
	return (
		<section className="bg-dark-gray">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Single blog post */}
					{posts &&
						posts.map((post) => (
							<article
								key={post.id}
								className="rounded-lg overflow-hidden flex flex-col justify-stretch items-stretch"
							>
								<div className="relative h-48">
									<Image
										src={post.coverImage.url}
										fill
										objectFit="cover"
										priority
										className="!relative"
									/>
								</div>
								<div className="flex flex-col gap-4 p-5 bg-dark pb-8 h-full justify-center">
									<div className="text-white flex items-center text-sm justify-between">
										<span className="flex items-center gap-2">
											<FaUser />
											{post.author.name}
										</span>
										<span className="flex items-center gap-2">
											<FaCalendar />
											{format(new Date(post.publishedAt), 'MM-dd-yyyy')}
										</span>
									</div>
									<h2 className="text-xl">{post.title}</h2>
									<Link href={`post/${post.slug}`} className="text-redCol">
										Read more...
									</Link>
								</div>
							</article>
						))}
				</div>
			</div>
		</section>
	);
}
