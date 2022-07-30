import React from "react";
import { useBreeds } from "../hooks/useBreeds";

export const Breeds = ({ onSelect }: Props) => {
  const { breeds } = useBreeds();

  return (
    <div>
      {breeds.map((breed) => (
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
