import { useDog } from "../hooks/useDog";

export const Dogs = ({ breed, max }: Props) => {
  const { data, status } = useDog(breed, max);

  if (status === 'loading') return <p>Cargando...</p>;

  if (status === 'error') return <p>No hay perros con la raza '{breed}'</p>;

  return (
    <div className="dogs-container">
      {
        //List of dogs with especific breed
        data.map((image) => (
          <img key={image} src={image} alt={image} />
        ))
      }
    </div>
  );
};

interface Props {
  breed: string;
  max?: number
}
