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
