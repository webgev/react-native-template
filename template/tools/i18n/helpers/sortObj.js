module.exports = {
  sort: (obj) =>
    Object.keys(obj)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .reduce((newObj, key) => {
        newObj[key] = obj[key];
        return newObj;
      }, {}),
};
