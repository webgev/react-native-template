export const delay = async (interval: number) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(null);
    }, interval),
  );
};
