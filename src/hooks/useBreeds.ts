import { useQuery } from "@tanstack/react-query"
import { fetchBreeds } from "../services/dog"

export const useBreeds = () => useQuery(['breeds'], fetchBreeds, {
    refetchOnWindowFocus: false
})
