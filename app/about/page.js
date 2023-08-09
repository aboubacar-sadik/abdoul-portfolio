import { getAbout } from '@/api/queries'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import tom from '@/public/svg/wave.svg'


const components = {
    img: (props) => (

        <Image {...props} fill priority className='object-contain !relative' />
    ),
    h1: ({ children }) => <h1 className='mb-5 text-center'>{children}</h1>,
    h2: ({ children }) => <h2 className='mt-14 mb-1 text-xl'>{children}</h2>,
    h4: ({ children }) => <h4 className='mb-5'>{children}</h4>,
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

    const aboutData = await getAbout()
    const content = aboutData.content.markdown
    const title = aboutData.pageTitle
    return (
        <section className="bg-dark-gray pt-0 border-b border-border text-justify">
            <div>
                <div className='bg-dark h-40 lg:h-96 flex items-center justify-center'>
                    <div className='text-center max-w-7xl m-auto'>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 relative py-16 lg:py-24">
                    <MDXRemote source={content} components={components} />
                </div>
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