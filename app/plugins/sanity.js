import { createClient } from '@sanity/client';

export default defineNuxtPlugin((nuxtApp) => {
    const sanity = createClient({
        projectId: nuxtApp.$config.public.FULLVIEWPORT_SANITY_STARTER_SANITY_ID,
        dataset: nuxtApp.$config.public.FULLVIEWPORT_SANITY_STARTER_SANITY_DATASET,
        apiVersion: nuxtApp.$config.public.FULLVIEWPORT_SANITY_STARTER_SANITY_API_VERSION,
        useCdn: true
    });

    nuxtApp.provide('sanity', sanity);
});
