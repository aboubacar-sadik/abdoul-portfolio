import { getAbout } from '@/api/queries'
import Certification from '@/components/Certification';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export const metadata = {
    title: 'About Illiassou Issoufou - Top Rated Upwork Freelancer',
    description: 'Looking for a reliable and professional virtual assistant? Look no further! Illiassou Issoufou is a top rated upwork freelancer virtual assistant offering a wide range of services to help you with your business needs. Contact Illiassou today to learn more.',
}

const components = {
    types: {
        // Exemple d'image personnalisée
        image: ({ value }) => (
            <Image src={value.asset.url} alt={value.alt || 'Image'} width={500} height={300} className='object-contain' />
        ),
    },
    block: {
        h1: ({ children }) => <h1 className="mb-5 text-center">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-1 text-xl mt-14">{children}</h2>,
        h4: ({ children }) => <h4 className="mb-5">{children}</h4>,
        normal: ({ children }) => <p className="relative mb-4">{children}</p>,
    },
    marks: {
        // Gestion des liens
        link: ({ children, value }) => {
            const target = (value.href || '').startsWith('http') ? '_blank' : undefined;
            return (
                <a href={value.href} target={target} rel={target ? 'noopener noreferrer' : undefined} className="text-redCol hover:underline">
                    {children}
                </a>
            );
        },
    },
    list: {
        // Gestion des listes non ordonnées
        bullet: ({ children }) => <ul className="mb-4 ml-8 space-y-2 list-disc list-inside">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li className="list-disc marker:text-redCol">{children}</li>,
    },
};


export default async function page() {

    const about = await getAbout()

    return (
        <section className="pt-0 text-justify border-b bg-dark-gray border-border">
            <div>
                <div className='flex items-center justify-center h-40 bg-dark lg:h-96'>
                    <div className='m-auto text-center max-w-7xl'>
                        <h1>{about.pageTitle}</h1>
                    </div>
                </div>
                <div className="relative max-w-4xl px-2 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
                    <PortableText value={about.content} components={components} onMissingComponent={false} />
                </div>
            </div>


        </section>
    )
}
