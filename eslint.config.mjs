import prettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Les composants de page et de layout Nuxt portent un nom de fichier
      // mono-mot par convention.
      'vue/multi-word-component-names': 'off',
    },
  },
  // Doit rester en dernier : neutralise les règles qui entreraient en conflit
  // avec le formatage de Prettier.
  prettier,
)
