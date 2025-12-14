const METADATA = {
    name: 'metaData',
    type: 'object',
    title: 'Metadata',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Optional.'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: 'Optional.'
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            description: 'Optional.'
        }
    ]
};

export const FIELDS = {
    METADATA
};
