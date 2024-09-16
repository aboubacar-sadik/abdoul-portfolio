export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Category Title',
            validation: Rule => Rule.required().error('Category title is required'),
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
            name: 'description',
            type: 'text',
            title: 'Category Description',
            description: 'Short description of the category.',
        },
    ],
};
