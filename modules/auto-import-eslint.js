import { defineNuxtModule, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('imports:extend', (autoImports) => {
      generateEslintGlobalsConfig(autoImports)
    })
  }
})

function generateEslintGlobalsConfig(autoImports) {
  addTemplate({
    filename: '.eslintrc.cjs',
    write: true,
    getContents: () => {
      return `// Auto generate by nuxt modules
module.exports = {
  globals: {
    ${autoImports
      .reduce(
        (amt, curr) => (curr.as && amt.push(`${curr.as}: 'readonly'`), amt),
        []
      )
      .join(',\n    ')}
  }
}
`
    }
  })
}
