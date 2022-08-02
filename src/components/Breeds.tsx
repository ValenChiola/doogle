import { useBreeds } from "../hooks/useBreeds";

export const Breeds = ({ onSelect }: Props) => {
  const { data, status } = useBreeds();

  if (status === 'loading') return <p>Cargando...</p>

  if (status === 'error') return <p>Hubo un error :/</p>

  return (
    <div>
      {data.map((breed) => (
        <p
          key={breed}
          style={{ cursor: onSelect && "pointer" }}
          onClick={() => onSelect?.(breed)}
        >
          {breed}
        </p>
      ))}
    </div>
  );
};

interface Props {
  onSelect?: (value: string) => void;
}
