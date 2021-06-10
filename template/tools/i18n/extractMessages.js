const path = require('path')

const fs = require('fs-extra')
const glob = require('glob')

const { extractMessages } = require('./helpers/transformMessages')

const rootContext = process.cwd()

const build = async () => {
  const files = glob.sync(path.resolve(rootContext, './src/**/*.i18n.json'))

  const defaultMessages = {}

  await Promise.all(
    files.map(async file => {
      Object.assign(defaultMessages, extractMessages(file, rootContext, await fs.readJson(file)))
    }),
  )

  console.log(JSON.stringify(defaultMessages, null, 2));
}

build().catch(error => {
  console.error(error)
  process.exit(1)
})
