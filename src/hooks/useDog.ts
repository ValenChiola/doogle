
import { useQuery } from "@tanstack/react-query";
import { fetchDogImagesByBreed } from "../services/dog";

export const useDog = ({ breed, max }: Props) => useQuery(['dog', breed, max], () => fetchDogImagesByBreed(breed, max), {
    refetchOnWindowFocus: false,
    staleTime: Infinity
})

interface Props {
    breed: string,
    max?: number
}