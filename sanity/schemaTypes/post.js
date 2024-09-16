export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required(),
            initialValue: 'Untitled Post',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
            initialValue: '#',
        },
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    validation: Rule => Rule.required(),
                    initialValue: 'Default Image',
                },
            ],
        },
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{ type: 'author' }],
            validation: Rule => Rule.required(),
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'reference', to: { type: 'category' } }],
            validation: Rule => Rule.required().min(1).error('At least one category is required'),
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
            validation: Rule => Rule.required(),
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'body',
            title: 'Blog content',
            type: 'blockContent'
        },
    ],
};
