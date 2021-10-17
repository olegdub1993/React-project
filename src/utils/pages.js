export const getPagesCount = (totalCount, pageSize) => {
  return Math.ceil(totalCount / pageSize);
};
