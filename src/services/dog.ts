import Axios from "axios";

Axios.defaults.baseURL = "https://dog.ceo/api"

export const fetchDogImagesByBreed = (breed: string, max: number = 12) =>
  Axios.get<DogImagesResponse>(`/breed/${breed}/images/random/${max}`)
    .then(({ data }) => data.message)

export const fetchBreeds = () =>
  Axios.get<BreedsResponse>('/breeds/list/all')
    .then(({ data }) => Object.keys(data.message))


/** Interfaces */
interface DogImagesResponse {
  message: string[]
}

interface BreedsResponse {
  message: string[];
  status: string;
}