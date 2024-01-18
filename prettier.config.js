module.exports = {
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    tabWidth: 4,
    semi: true,
    importOrder: ['^(react/(.*)$)|^(react$)', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[./]'],
    importOrderParserPlugins: ['typescript', 'jsx'],
    importOrderTypeScriptVersion: '5.0.0',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
};
