import { Dispatch, SetStateAction } from "react";

export interface ICategoryProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
}
