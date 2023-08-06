import { getAbout } from '@/api/queries'
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

const renderers = {
    h4: ({ children }) => <h4 className='mb-3'>{children}</h4>,
    img: ({ src, altText, height, width }) => (
        <Image
            src={src}
            alt={altText}
            height={height}
            width={width}
            objectFit="cover"
        />
    ),
    a: ({ children, openInNewTab, href, rel, ...rest }) => {
        if (href.includes('localhost')) {
            console.log(href);
            return (
                <Link href={href} {...rest} className='text-redCol hover:underline'>
                    {children}
                </Link>
            );

        } else {
            return (
                <a
                    href={href}
                    target={openInNewTab ? '_blank' : '_self'}
                    rel={rel || 'noopener noreferrer'}
                    className='text-redCol hover:underline'
                    {...rest}
                >
                    {children}
                </a>
            );
        }

    },
    ul: ({ children }) => <ul className='ml-8 list-inside space-y-2 list-disc mb-4'>{children}</ul>,
    li: ({ children }) => <li className=' list-disc marker:text-redCol'>{children}</li>,
    p: ({ children }) => <p className=' mb-4'>{children}</p>,

}


export default async function page() {

    const content = await getAbout()
    // console.log(content[8]);
    return (
        <section className="bg-dark-gray">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <RichText content={content} renderers={renderers} />
            </div>
        </section>
    )
}
