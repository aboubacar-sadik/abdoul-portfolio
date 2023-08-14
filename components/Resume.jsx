import Link from 'next/link';
import React from 'react';
import { OutlinedBtnWhite } from './Buttons';

export default function Resume() {
	const cvUrl = 'https://www.abdoulhayyou.com/illiassou_cv.pdf';

	return (
		<section>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row bg-redCol rounded-lg p-4 md:p-8 gap-4 md:gap-8 lg:p-16 text-center md:text-left items-center justify-between lg:max-w-4xl m-auto">
					<div>
						<h3>Download my resume.</h3>
						<p>To find out more about my career path, download my resume.</p>
					</div>
					<Link aria-label="Link to download Illiassou resume" href={cvUrl} target="_blank">
						<OutlinedBtnWhite>Download</OutlinedBtnWhite>
					</Link>
				</div>
			</div>
		</section>
	);
}
