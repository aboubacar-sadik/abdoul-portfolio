export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Service Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
