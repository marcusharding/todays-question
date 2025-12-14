export default {
    name: 'question',
    type: 'document',
    title: 'Question',
    fields: [
        {
            name: 'question',
            type: 'string',
            title: 'Question',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Name of the person who asked the question'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date',
            description: 'Date when the question was added'
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
            description: 'Where / when the question was added'
        }
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'name'
        }
    }
};
