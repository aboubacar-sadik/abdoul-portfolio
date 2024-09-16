export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'testimonialContent',
            title: 'Testimonial Content',
            type: 'text',
        },
        {
            name: 'client',
            title: 'Client Name',
            type: 'string',
        },
        {
            name: 'clientImage',
            title: 'Client Image',
            type: 'image',
            options: {
                hotspot: true, // Allows image cropping
            },
        },
        {
            name: 'clientPosition',
            title: 'Client Position',
            type: 'string',
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
        },
    ],
};
