const buildPrefix = (fileName, rootContext) =>
  fileName
    .replace(rootContext, '')
    .replace('.i18n.json', '')
    .replace(/\//g, '.')
    .slice(1)

module.exports = {
  extractMessages: (fileName, rootContext, messages) => {
    const prefix = buildPrefix(fileName, rootContext)

    return Object.keys(messages).reduce(
      (memo, currentKey) => ({
        ...memo,
        [`${prefix}.${currentKey}`]: messages[currentKey],
      }),
      {},
    )
  },

  loadMessages: (fileName, rootContext, messages) => {
    const prefix = buildPrefix(fileName, rootContext)

    return Object.keys(messages).reduce(
      (memo, currentKey) => ({
        ...memo,
        [currentKey]: {
          id: `${prefix}.${currentKey}`,
          defaultMessage: messages[currentKey],
        },
      }),
      {},
    )
  },
}
