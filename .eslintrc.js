module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        node: true,
    },
    parserOptions: { ecmaVersion: 2020 },
    globals: {
        $: "readonly",
    },
};
