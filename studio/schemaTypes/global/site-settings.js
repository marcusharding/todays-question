export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
        {
            name: 'metaImage',
            type: 'image',
            title: 'Global Meta Image',
            description: 'Image Size: 1200 x 600.'
        },
        {
            name: 'metaTitle',
            type: 'string',
            title: 'Meta Title'
        },
        {
            name: 'metaDescription',
            type: 'string',
            title: 'Meta Description'
        },
        {
            name: 'whatImWorkingOn',
            type: 'text',
            title: "What I'm Working On",
            description: "A field to periodically update with what you're currently working on"
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings'
            };
        }
    }
};
