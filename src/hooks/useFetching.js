import { useState } from "react";
export const useFetching = (calback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = async (...arg) => {
    try {
      setIsLoading(true);
      await calback(...arg);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
