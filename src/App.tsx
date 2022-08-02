import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import Modal from "react-modal";
import { Breeds } from "./components/Breeds";
import { CrossIcon } from "./components/CrossIcon";
import { Dogs } from "./components/Dogs";

import "./index.css";

Modal.setAppElement("#root");

const DEFAULT_BREED = 'vizsla'

const App = () => {
  const [breed, setBreed] = useState<string>(DEFAULT_BREED);
  const [max, setMax] = useState(12);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const handleOnSelect = (breed: string) => {
    setBreed(breed);
    handleClose();
  };

  const handleOnBlur = () => {
    if (!inputRef.current) return;
    setMax(+inputRef.current.value);
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
          ref={inputRef}
          onChange={handleOnBlur}
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
