/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');

const { sort } = require('./helpers/sortObj');

const rootContext = process.cwd();

const build = async () => {
  const filePath = process.argv[2];
  const file = glob.sync(path.resolve(rootContext, filePath))[0];

  const en = await fs.readJson(file);

  const ordered = sort(en);

  await fs.writeJson(file, ordered, { spaces: 2 });
};

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
