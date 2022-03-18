import { FormEvent, useState } from "react";
import { ICategoryProps } from "./category.model";

const DEFAULT_INITIAL_STATE = "";

const CategoryAdd = ({ setCategories }: ICategoryProps) => {
  const [inputValue, setInputValue] = useState(DEFAULT_INITIAL_STATE);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) return;
    setCategories((category) => [inputValue, ...category]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingresar anime"
      />
    </form>
  );
};

export default CategoryAdd;
