import { useState } from "react";
import CategoryAdd from "./components/category/CategoryAdd";
import GifGrid from "./components/grid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  return (
    <>
      <h1>Gif Expert App</h1>
      <CategoryAdd setCategories={setCategories} />
      <div style={{ height: "2px", backgroundColor: "black" }}></div>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} name={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
