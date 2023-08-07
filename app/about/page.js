import { getAbout } from '@/api/queries'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import tom from '@/public/svg/wave.svg'


const components = {
    img: (props) => (

        <Image {...props} fill priority className='w-full object-contain !relative' />
    ),
    h2: ({ children }) => <h2 className='mb-3 text-2xl'>{children}</h2>,
    h4: ({ children }) => <h4 className='mb-3'>{children}</h4>,
    a: ({ href, children }) => {
        if (href.startsWith('https')) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className='text-redCol hover:underline'>{children}</a>
        } else {
            return <Link href={href} className='text-redCol hover:underline'>{children}</Link>
        }
    },
    ul: ({ children }) => <ul className='ml-8 list-inside space-y-2 list-disc mb-4'>{children}</ul>,
    li: ({ children }) => <li className=' list-disc marker:text-redCol'>{children}</li>,
    p: ({ children }) => <p className=' mb-4 relative'>{children}</p>,
}

export default async function page() {

    const content = await getAbout()
    // console.log(content[8]);
    return (
        <section className="bg-dark-gray">
            <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 relative">
                <MDXRemote source={content} components={components} />
            </div>

        </section>
    )
}


// const renderers = {
//
//     img: ({ src, altText, height, width }) => (
//         <Image
//             src={src}
//             alt={altText}
//             height={height}
//             width={width}
//             objectFit="cover"
//         />
//     ),
//     a: ({ children, openInNewTab, href, rel, ...rest }) => {
//         if (href.includes('localhost')) {
//             console.log(href);
//             return (
//                 <Link href={href} {...rest} className='text-redCol hover:underline'>
//                     {children}
//                 </Link>
//             );

//         } else {
//             return (
//                 <a
//                     href={href}
//                     target={openInNewTab ? '_blank' : '_self'}
//                     rel={rel || 'noopener noreferrer'}
//                     className='text-redCol hover:underline'
//                     {...rest}
//                 >
//                     {children}
//                 </a>
//             );
//         }

//     },
//

// }