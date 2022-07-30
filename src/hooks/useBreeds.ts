import { useEffect, useState } from "react"
import { fetchBreeds } from "../services/dog"

export const useBreeds = () => {
    const [breeds, setBreeds] = useState<string[]>([])

    useEffect(() => {
        fetchBreeds()
            .then(setBreeds)
    }, [])

    return {
        breeds
    }
}