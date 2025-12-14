import path from 'path';

const buildEslintCommand = (filenames) =>
    `npm run lint:fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`;

const config = {
    '*.{js,vue,cjs,mjs}': [buildEslintCommand]
};

export default config;