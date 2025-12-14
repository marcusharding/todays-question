import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {deskStructure} from './deskStructure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes';
import {media} from 'sanity-plugin-media';

const generateProductionUrl = (document, previewUrl) => {
    const params = new URLSearchParams();
    params.set('preview', 'true');

    switch (document._type) {
        case 'homepage':
            return `${previewUrl}?${params}`;
        case 'terms-and-conditions':
            return `${previewUrl}/${document.slug?.current}?${params}`;
        default:
            return `${previewUrl}/${document.slug?.current ? document.slug?.current : ''}?${params}`;
    }
};

const commonConfig = {
    plugins: [structureTool({structure: deskStructure}), visionTool(), media()],
    schema: {
        types: schemaTypes
    },
    document: {
        productionUrl: async (prev, context) => {
            const {document} = context;
            const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL;
            return generateProductionUrl(document, previewUrl);
        }
    }
};

const project = {
    name: 'todays-question',
    title: 'Todays Question',
    projectId: process.env.SANITY_STUDIO_ID,
    dataset: process.env.SANITY_STUDIO_DATASET
};

export default defineConfig({
    ...commonConfig,
    ...project
});
