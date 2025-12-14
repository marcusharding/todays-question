import {FaFolderOpen, FaSlidersH} from 'react-icons/fa';

export const deskStructure = (S, context) => {
    return S.list()

        .title('Content')
        .items([
            // Site Settings
            S.listItem()
                .title('Site Settings')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings'))
                .icon(FaSlidersH),

            S.divider(),

            // Questions
            S.listItem()
                .title('Questions')
                .icon(FaFolderOpen)
                .child(S.documentTypeList('question').title('All Questions'))
        ]);
};
