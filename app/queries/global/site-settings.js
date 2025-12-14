export const siteSettingsQuery = () => /* groq */ `
    *[_type == "siteSettings" && !(_id in path("drafts.**"))] {
        metaImage {
            "asset": asset->,
            "url": asset->url
        },
        metaTitle,
        metaDescription,
        whatImWorkingOn
    }[0]
`;
