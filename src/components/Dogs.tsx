import React from "react";
import { useDog } from "../hooks/useDog";

export const Dogs = ({ breed }: Props) => {
  const { images, isLoading, isError } = useDog(breed);

  if (isLoading) return <p>Cargando...</p>;

  if (isError) return <p>No hay perros con la raza '{breed}'</p>;

  return (
    <div className="dogs-container">
      {
        //List of dogs with especific breed
        images.map((image) => (
          <img key={image} src={image} alt={image} />
        ))
      }
    </div>
  );
};

interface Props {
  breed: string;
}
