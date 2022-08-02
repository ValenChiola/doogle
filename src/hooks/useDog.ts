
import { useQuery } from "@tanstack/react-query";
import { fetchDogImagesByBreed } from "../services/dog";

export const useDog = (breed: string, max?: number) => useQuery(['dog', breed, max], () => fetchDogImagesByBreed(breed, max), {
    refetchOnWindowFocus: false,
    staleTime: Infinity
})
