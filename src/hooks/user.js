import { getItem } from "~lib/local-storage";

export const useUser = () => {
  return getItem("Authorization") ? { name: "John Doe" } : null;
};
