const path = require('path');

const fs = require('fs-extra');
const glob = require('glob');

const { extractMessages } = require('./helpers/transformMessages');
const { sort } = require('./helpers/sortObj');

const rootContext = process.cwd();

const build = async () => {
  const files = glob.sync(path.resolve(rootContext, './src/**/*.i18n.json'));

  const defaultMessages = {};

  await Promise.all(
    files.map(async file => {
      Object.assign(
        defaultMessages,
        extractMessages(file, rootContext, await fs.readJson(file)),
      );
    }),
  );

  const ordered = sort(defaultMessages);

  console.log(JSON.stringify(ordered, null, 2));
};

build().catch(error => {
  console.error(error);
  process.exit(1);
});
