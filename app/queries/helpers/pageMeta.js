export const metaQuery = (type) => /* groq */ `
    *[_type == "${type}"] {
        metaData {
            description, 
            title, 
            "imageUrl": image.asset->url 
        }
    }[0]
`;

export const postMetaQuery = (slug) => /* groq */ `
    *[_type == "post" && slug.current == "${slug}"] {
        metaData {
            description, 
            title, 
            "imageUrl": image.asset->url 
        }
    }[0]
`;
