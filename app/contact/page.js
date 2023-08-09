import ContactList from '@/components/ContactList'
import Form from '@/components/Form'
import React from 'react'

export default function page() {
    return (
        <section className="bg-dark-gray border-b-2 border-border py-0">
            <div className='bg-dark h-40 lg:h-96 flex items-center justify-center'>
                <div className='text-center max-w-7xl m-auto'>
                    <h1>Get in Touch</h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16 lg:py-24">

                <Form />
                <ContactList />
            </div>
        </section>
    )
}
