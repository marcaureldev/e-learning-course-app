import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Les composants de page/layout Nuxt portent un nom de fichier mono-mot par convention.
    'vue/multi-word-component-names': 'off',
  },
})
