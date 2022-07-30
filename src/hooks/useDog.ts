
import { useEffect, useState } from "react";
import { fetchDogImagesByBreed } from "../services/dog";

export const useDog = (breed: string) => {
    const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!breed) return
        setIsLoading(true)
        fetchDogImagesByBreed(breed)
            .then(setImages)
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))

        return () => setIsError(false)

    }, [breed]);

    return {
        images,
        isLoading,
        isError
    }
}