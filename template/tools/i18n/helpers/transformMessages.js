const buildPrefix = (fileName, rootContext) =>
  fileName
    .replace(rootContext, '')
    .replace('.i18n.json', '')
    .replace(/\//g, '.')
    .slice(1);

module.exports = {
  extractMessages: (fileName, rootContext, messages) => {
    const prefix = buildPrefix(fileName, rootContext);

    return Object.keys(messages).reduce(
      (memo, currentKey) => ({
        ...memo,
        [`${messages[currentKey].id}`]: messages[currentKey].message,
      }),
      {},
    );
  },
};
