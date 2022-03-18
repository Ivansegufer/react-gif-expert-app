import { useEffect, useState } from "react";
import { IGifImage } from "../components/grid/gif.grid.model";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoryName: string) => {
  const [state, setState] = useState<{ data: IGifImage[]; loading: boolean }>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoryName).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  });

  return state;
};
