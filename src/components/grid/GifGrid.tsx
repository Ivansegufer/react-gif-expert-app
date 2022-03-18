import { useFetchGifs } from "../../hooks/useFetchGifs";
import { IGifGridProps } from "./gif.grid.model";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ name }: IGifGridProps) => {
  const { data: images, loading } = useFetchGifs(name);

  return (
    <>
      <h3>{name}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {images.map((imagen) => (
            <GifGridItem
              key={imagen.id}
              title={imagen.title}
              url={imagen.url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
