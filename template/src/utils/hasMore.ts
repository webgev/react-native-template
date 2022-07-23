export const isHasMore = (
  totalCount: number,
  limit: number,
  offset: number,
) => {
  const page = offset ?? 0;
  return limit ? page + limit < totalCount + limit : false;
};
