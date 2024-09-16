export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required().error('Author name is required'),
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
            description: 'A short biography of the author.',
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Important for SEO and accessibility.',
                    validation: Rule => Rule.required().error('Alt text is required'),
                },
            ],
        },
    ],
};
