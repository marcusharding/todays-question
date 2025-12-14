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
        }
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'name'
        }
    }
};
