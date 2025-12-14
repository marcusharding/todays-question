export const homepageQuery = /* groq */ `
    *[_type == "question"] | order(_createdAt asc) {
        question,
        name,
        date,
        location
    }
`;
