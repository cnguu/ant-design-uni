import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    vue: true,
    typescript: true,
    unocss: true,
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    formatters: {
      css: 'prettier',
      html: 'prettier',
      markdown: 'prettier',
    },
    pnpm: true,
    ignores: [],
  },
)
