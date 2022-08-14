import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "react-modal";
import { Breeds } from "./components/Breeds";
import { CrossIcon } from "./components/CrossIcon";
import { Dogs } from "./components/Dogs";
import { useDebounce } from "./hooks/useDebounce";

import "./index.css";

Modal.setAppElement("#root");

const DEFAULT_BREED = "vizsla";
const DEFAULT_MAX_IMAGES = 12

const App = () => {
  const [breed, setBreed] = useState<string>(DEFAULT_BREED);
  const [max, setMax] = useState(DEFAULT_MAX_IMAGES);
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const debounce = useDebounce({
    onDebounce: (max) => setMax(+max),
  });

  const handleOnSelect = (breed: string) => {
    setBreed(breed);
    handleClose();
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="container">
      <div className="options">
        <div className="buttons">
          <button
            onClick={() => queryClient.invalidateQueries(["dog", breed, max])}
          >
            Cargar más
          </button>
          <button onClick={handleOpen}>Ver razas</button>
        </div>
        <input
          type="number"
          min={1}
          max={15}
          defaultValue={max}
          onChange={e => debounce(e.target.value)}
        />
      </div>

      <h3>Raza: {breed ?? "Ninguna"}</h3>

      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "#000000bd",
          },
        }}
      >
        <CrossIcon onClose={handleClose} />
        <Breeds onSelect={handleOnSelect} />
      </Modal>
      {breed && <Dogs breed={breed} max={max} />}
    </div>
  );
};

export default App;
