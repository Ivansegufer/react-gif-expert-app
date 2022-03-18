import { IGifImage } from "../components/grid/gif.grid.model";

export const getGifs = async (categoryName: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gu2dbA8at5Lza5XEX44v2yAGvmAxH6RL&q=${encodeURI(
    categoryName
  )}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = (data as any[]).map<IGifImage>((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
