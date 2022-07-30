import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { Breeds } from "./components/Breeds";
import { CrossIcon } from "./components/CrossIcon";
import { Dogs } from "./components/Dogs";
import styles from "./customStyles";

import "./index.css";

Modal.setAppElement("#root");

const App = () => {
  const [breed, setBreed] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBreed(inputRef.current?.value);
  };

  const handleOnSelect = (breed: string) => {
    if (!inputRef.current) return;
    inputRef.current.value = breed;
    setBreed(breed);
    handleClose();
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-section">
          <label>Raza: </label>
          <input type="search" ref={inputRef} />
        </div>
        <button onClick={() => setBreed("")}>Buscar</button>
        <button onClick={handleOpen}>Ver razas</button>
      </form>
      <Modal isOpen={isOpen} style={styles}>
        <CrossIcon onClose={handleClose} />
        <Breeds onSelect={handleOnSelect} />
      </Modal>
      {breed && <Dogs breed={breed} />}
    </div>
  );
};

export default App;
