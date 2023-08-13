import ContactList from '@/components/ContactList'
import Form from '@/components/Form'
import React from 'react'

export const metadata = {
    title: 'Contact Illiassou Issoufou - Top Rated Upwork Freelancer',
    description: 'Looking for a reliable and professional virtual assistant? Look no further! Illiassou Issoufou is a top rated upwork freelancer virtual assistant offering a wide range of services to help you with your business needs. Contact Illiassou today to learn more.',
}


export default function page() {
    return (
        <section className="bg-dark-gray border-b-2 border-border py-0">
            <div className='bg-dark h-40 lg:h-96 flex items-center justify-center'>
                <div className='text-center max-w-7xl m-auto'>
                    <h1>Get in Touch</h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16'>
                    <Form />
                    <ContactList />
                </div>
            </div>
        </section>
    )
}
