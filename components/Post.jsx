import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import format from 'date-fns/format';
import { OutlinedBtnRed } from './Buttons';

export default function Post({ posts }) {
	return (
		<section>
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
									priority
									sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
									className="!relative object-cover w-full"
									alt={post.imageAltText}
								/>
							</div>
							<div className="flex flex-col gap-4 p-5 bg-dark pb-8 h-full ">
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
								<Link href={`posts/${post.slug}`} className="text-redCol">
									Read more...
								</Link>
							</div>
						</article>
					))}
				<div className=" col-span-full flex items-center justify-center">
					<OutlinedBtnRed>Load more</OutlinedBtnRed>
				</div>
			</div>
		</section>
	);
}
