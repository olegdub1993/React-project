import { useMemo } from "react";

export const usePagination = (pagesCount) => {
  const pagesArray = useMemo(() => {
    const arr = [];
    for (let index = 1; index <= pagesCount; index++) {
      arr.push(index);
    }
    return arr;
  }, [pagesCount]);
  return pagesArray;
};
